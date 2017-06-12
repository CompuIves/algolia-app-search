import { Context } from 'koa';
import { removeItem, addItem } from '../services/algolia';

export const deleteRoute = async (ctx: Context) => {
  const { id } = ctx.params;

  if (id == null) {
    throw new Error('Please provide an id');
  }

  const item = await removeItem(id);

  ctx.body = { status: 'success', item };
};

export const createRoute = async (ctx: Context) => {
  const { item } = ctx.params;

  if (item == null) {
    throw new Error('Please provide an item');
  }

  await addItem(item);

  ctx.body = { status: 'success', item };
};
