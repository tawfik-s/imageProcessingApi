import sharp from 'sharp';

export const getMetadata = async (imageName: string) => {
  try {
    const image: string = `./images/full/${imageName}`;
    const metadata = await sharp(image).metadata();
    return metadata;
  } catch (error) {
    console.log(error);
  }
};
