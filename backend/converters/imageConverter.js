import sharp from 'sharp';

export const convertImage = async (inputPath, format = 'jpeg') => {
  const outputPath = `output/${Date.now()}.${format}`;
  await sharp(inputPath).toFormat(format).toFile(outputPath);
  return outputPath;
};
