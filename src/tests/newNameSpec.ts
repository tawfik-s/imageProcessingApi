import { imageNewNameAfterResize } from '../utils/generateName';

describe('test new Name', () => {
  it('test using fjord.jpg', () => {
    const newName = imageNewNameAfterResize('fjord.jpg', 200, 200);
    expect(newName).toEqual('fjord_height200_width200.jpg');
  });
  it('test using fjord', () => {
    const newName = imageNewNameAfterResize('fjord', 200, 200);
    expect(newName).toEqual('fjord_height200_width200.jpg');
  });
});
