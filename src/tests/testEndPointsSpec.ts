import supertest from 'supertest';
import { checkIfImageExist } from '../services/checkIfImageExist';
import app from '../index';

// create a request object
const request = supertest(app);

describe('Test image Resize end point and controller', () => {
  it('test bad request without params', async () => {
    const response = await request.get('/api/image_resize');
    expect(response.status).toBe(400);
  });

  it('test working request', async () => {
    const response = await request
      .get('/api/image_resize')
      .query({ name: 'fjord.jpg', width: 200, height: 200 });
    expect(response.status).toBe(200);
  });

  it('test file exist', async () => {
    const response = await request
      .get('/api/image_resize')
      .query({ name: 'fjord.jpg', width: 200, height: 200 });
    const result = await checkIfImageExist('fjord.jpg', 200, 200);
    expect(result).toBeTruthy();
  });

  it('test not find image request', async () => {
    const response = await request
      .get('/api/image_resize')
      .query({
        name: 'fjokdsfjsdlfekdjfjdkjfdrd.jpg',
        width: 200,
        height: 200,
      });
    expect(response.text).toEqual('please enter a valid image name');
  });
});
