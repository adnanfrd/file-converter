// converters/pdfConverter.js
import fs from 'fs';
import PDFDocument from 'pdfkit';

export const convertToPDF = (imagePath) => {
  return new Promise((resolve) => {
    const outputPath = `output/${Date.now()}.pdf`;
    const doc = new PDFDocument();
    const stream = fs.createWriteStream(outputPath);

    doc.pipe(stream);
    doc.image(imagePath, {
      fit: [500, 400],
      align: 'center',
      valign: 'center'
    });
    doc.end();

    stream.on('finish', () => resolve(outputPath));
  });
};
