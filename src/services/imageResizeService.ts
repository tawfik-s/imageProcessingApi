import sharp from 'sharp';
import { imageNewNameAfterResize } from '../utils/generateName';


export const resizeImage = async (
  imageName: string,
  _width: number,
  _height: number
): Promise<string> => {
  try {
    let image: string = '';
    if(imageName.split('.')[1]==undefined){
      image=`./images/full/${imageName}.jpg`;
    }else{
     image=`./images/full/${imageName}`;
    }
    const destName = imageNewNameAfterResize(imageName, _width, _height);
    const dest: string = `./images/thumb/${destName}`;
    await sharp(image)
      .resize({
        width: _width,
        height: _height,
      })
      .toFile(dest);
    return destName;
  } catch (error) {
    console.log(error);
    return 'Error';
  }
};
