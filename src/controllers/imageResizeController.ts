import express from 'express';
import { resizeImage } from '../services/imageResizeService';
import { checkIfImageExist } from '../services/checkIfImageExist';
import { imageNewNameAfterResize } from '../utils/generateName';
import { imageResizeSchema } from '../utils/validators/imageResizeValidator';
import path from 'path';

export const imageResizeController = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const { error, value } = imageResizeSchema.validate(req.query);

    if (error) {
       console.log(error);
      res.status(400).send('please enter valid params');
    } else {
      const _height = parseInt(req.query.height as string);
      const _width = parseInt(req.query.width as string);
      const _name = req.query.name as string;

      if (!checkIfImageExist(_name, _width, _height)) {
        const result: string = await resizeImage(_name, _width, _height);
        if (result == 'Error') {
          res.send('please enter a valid image name');
        }
      }
      const outputPath = path.resolve(
        `./images/thumb/${imageNewNameAfterResize(_name, _width, _height)}`
      );
      res.sendFile(outputPath);
    }
  } catch (error) {
    res.status(400).send('please enter a valide parameters');
  }
};
