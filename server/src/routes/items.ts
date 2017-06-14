import { Context } from 'koa';
import { pickBy } from 'lodash';

import { removeItem, addItem } from '../services/algolia';

import generateValidation, {
  StringType,
  NumberType,
} from '../utils/body-checker';

// Item type definition, used for checking by API
const itemTypeDefinition = {
  category: StringType.isRequired,
  rating: NumberType.isRequired,
  name: StringType.isRequired,
  image: StringType.isRequired,
  link: StringType.isRequired,
  ratingCount: NumberType.isRequired,
  price: StringType,
};
const validateItem = generateValidation(itemTypeDefinition);

/**
 * This route removes an item from the Algolia index, it's called as a DELETE request
 */
export const deleteRoute = async (ctx: Context) => {
  const { id } = ctx.params;

  if (id == null) {
    throw new Error('Please provide an id');
  }

  const info = await removeItem(id);

  ctx.body = { status: 'success', info };
};

/**
 * This route is responsible for creating items, it's called as a POST request
 * with payload
 * 
 * ```
 * {
 *  "item": {
 *    // Actual item info
 *  }
 * }
 * ```
 */
export const createRoute = async (ctx: Context) => {
  const { item } = ctx.request.body;

  const errors = validateItem(item);

  if (errors.length > 0) {
    throw new Error(errors[0]);
  }

  // Only pick the keys that are in our type definition, drop other keys
  const pickedItem = pickBy(item, (value: any, key) => {
    return key in itemTypeDefinition;
  }) as Item;

  const info = await addItem(pickedItem);

  ctx.body = { status: 'success', item: pickedItem, info };
};
