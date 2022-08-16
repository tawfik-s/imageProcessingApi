import supertest from 'supertest';
import { resizeImage } from '../services/imageResizeService';

describe('Test image Resize service', () => {
  it('test resizeImageService', async () => {
    expect(await resizeImage('fjord.jpg',200,200)).toEqual('fjord_height200_width200.jpg');
  });
  it('test resizeImageService test file rong file name', async () => {
    expect(await resizeImage('fjo.jpg',200,200)).toEqual('Error');
  });

});
