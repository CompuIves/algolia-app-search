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

export async function addItem(item: Item) {
  return await index.addObject(item);
}

export async function removeItem(id: string) {
  return await index.deleteObject(id);
}
