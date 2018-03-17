import { handler } from './houses';

describe('houses', () => {
  describe('#handler', () => {
    it('should return the houses', () =>
      new Promise((resolve, reject) => {
        handler({}, {}, (error, houses) => {
          try {
            expect(error).toBeNull();
            expect(houses.length).toBeGreaterThan(1);
            resolve();
          } catch (err) {
            reject(err);
          }
        });
      }));
  });
});
