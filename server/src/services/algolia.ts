import * as algoliasearch from 'algoliasearch';

const APPLICATION_ID: string = process.env.ALGOLIA_APPLICATION_ID;
const ADMIN_KEY: string = process.env.ALGOLIA_ADMIN_KEY;

if (!APPLICATION_ID || !ADMIN_KEY) {
  throw new Error(
    'Cannot connect with Algolia: ALGOLIA_APPLICATION_ID and ALGOLIA_ADMIN_KEY are not set.',
  );
}

const client = algoliasearch(APPLICATION_ID, ADMIN_KEY);
const index = client.initIndex('apps');

/**
 * Adds an item to the Algolia index
 * 
 * @param {Item} item 
 * @returns The result returned from the Algolia API
 */
export async function addItem(item: Item) {
  return await index.addObject(item);
}

/**
 * Removes an item from the Algolia index
 * 
 * @param {string} id The objectId that corresponds to the item
 * @returns The result returned from the Algolia API
 */
export async function removeItem(id: string) {
  return await index.deleteObject(id);
}
