import * as helper from './index';

describe('helper', () => {

  describe('fetch type', () => {

    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          pokemon: "pokemon"
        })
      }));
    });

    it('should call initial fetch', () => {
      expect(window.fetch).not.toHaveBeenCalled();
      helper.fetchType();
      expect(window.fetch).toHaveBeenCalled();
    });

    it('should return an object if valid status code', () => {
      const response = helper.fetchType();
      const expected = { pokemon: "pokemon" };

      expect(response).resolves.toEqual(expected);
    });

    it('should throw an error if invalid status code', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const response = helper.fetchType();
      const expected = Error('could not fetch type');

      expect(response).rejects.toEqual(expected);
    });
  });
});
