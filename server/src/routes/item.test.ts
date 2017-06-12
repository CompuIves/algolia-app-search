import { createRoute, deleteRoute } from './items';

jest.mock('../services/algolia', () => ({
  addItem: (item: Item) => {
    return item;
  },
  removeItem: (id: string) => {
    return { id: 'item' };
  },
}));

describe('routes', () => {
  describe('items', () => {
    it('can create an item', async () => {
      const item = {
        category: 'Games',
        rating: 4.5,
        name: 'Draw Something Free',
        image:
          'http://a567.phobos.apple.com/us/r1000/112/Purple/v4/f2/ec/56/f2ec5676-3c96-ab7e-39f2-5e98e9662040/Icon.png',
        link: 'https://itunes.apple.com/us/app/draw-something-free/id488628250',
        ratingCount: 1670278,
        price: '0 USD',
      };
      const context = {
        params: {
          item,
        },
      };

      const result = await createRoute(context);

      expect(context.body).toEqual({ status: 'success', item });
    });

    it('does check parameters on create', async () => {
      return createRoute({ params: {} }).catch(e => {
        expect(e).toMatchSnapshot();
      });
    });

    it('can remove an item', async () => {
      const context = {
        params: {
          id: 'test',
        },
      };

      const result = await deleteRoute(context);

      expect(context.body).toEqual({ status: 'success', item: { id: 'item' } });
    });

    it('does check parameters on remove', async () => {
      return deleteRoute({ params: {} }).catch(e => {
        expect(e).toMatchSnapshot();
      });
    });
  });
});
