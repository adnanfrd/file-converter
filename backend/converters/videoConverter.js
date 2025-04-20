import ffmpeg from 'fluent-ffmpeg';

export const  convertVideo = (inputPath, format = 'mp4') => {
  return new Promise((resolve, reject) => {
    const outputPath = `output/${Date.now()}.${format}`;
    ffmpeg(inputPath)
      .toFormat(format)
      .on('end', () => resolve(outputPath))
      .on('error', reject)
      .save(outputPath);
  });
};
