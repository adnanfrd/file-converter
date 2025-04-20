// app.js
import express from 'express';
import multer from 'multer';
import { fileTypeFromBuffer } from 'file-type'; // Correct import for file-type
import fs from 'fs';
import cors from 'cors';

import { convertImage } from './converters/imageConverter.js';
import { convertVideo } from './converters/videoConverter.js';
import { convertToPDF } from './converters/pdfConverter.js';

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post('/convert', upload.single('file'), async (req, res) => {
  const buffer = req.file.buffer;
  const selectedFormat = req.body.format; // e.g., 'mp4', 'jpeg', 'pdf'

  const detectedType = await fileTypeFromBuffer(buffer);
  if (!detectedType) return res.status(400).send('Unsupported file type');

  const ext = detectedType.ext;
  const inputTempPath = `uploads/${Date.now()}_input.${ext}`;
  const outputTempPath = `output/${Date.now()}_output.${selectedFormat}`;

  fs.writeFileSync(inputTempPath, buffer);

  let finalOutputPath;

  try {
    if (['jpg', 'jpeg', 'png', 'webp'].includes(ext) && ['jpeg', 'png', 'webp'].includes(selectedFormat)) {
      finalOutputPath = await convertImage(inputTempPath, selectedFormat);
    } else if (['webm', 'mp4', 'mov'].includes(ext) && ['mp4', 'webm'].includes(selectedFormat)) {
      finalOutputPath = await convertVideo(inputTempPath, selectedFormat);
    } else if (['jpg', 'jpeg', 'png'].includes(ext) && selectedFormat === 'pdf') {
      finalOutputPath = await convertToPDF(inputTempPath);
    } else {
      return res.status(400).send('Unsupported conversion');
    }

    res.download(finalOutputPath, () => {
      setTimeout(() => {
        fs.unlinkSync(inputTempPath);
        fs.unlinkSync(finalOutputPath);
      }, 30000); // Delete files after 30 seconds
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Conversion failed');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
