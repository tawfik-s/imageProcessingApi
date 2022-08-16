import express, { Application } from 'express';

import imageResize from './routes/imageResizeRouter';

const port = 3000;

const app: Application = express();

app.use(express.json());

app.use('/api/image_resize', imageResize);

app.listen(port, () => {
  console.log(`server has been started in port :${port}`);
});

export default app;
