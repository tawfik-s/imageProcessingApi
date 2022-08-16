import fs from 'fs';
import { imageNewNameAfterResize } from '../utils/generateName';

export const checkIfImageExist = (
  imageName: string,
  _width: number,
  _height: number
) => {
  try {
    let imageNewName = imageNewNameAfterResize(imageName, _width, _height);
    let path = `./images/thumb/${imageNewName}`;
    //using synchronous way to block all parallel process and do the current file check
    if (fs.existsSync(path)) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
