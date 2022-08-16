import express from 'express';
import { imageResizeController } from '../controllers/imageResizeController';
const imageResize = express.Router();

imageResize.get('/', imageResizeController);

export default imageResize;
