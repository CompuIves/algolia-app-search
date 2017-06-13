// @flow
import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

import type { AlgoliaResponse } from './algolia.types';

const ALGOLIA_ID = 'IK6IMI37ED';
const ALGOLIA_API_KEY = '83be56cdd84540de1904503c0aaa3b32';
const INDEX = 'apps';
const ASC_ORDER_INDEX = 'apps_ranking_asc';

const client = algoliasearch(ALGOLIA_ID, ALGOLIA_API_KEY);
export const helper = algoliasearchHelper(client, INDEX, {
  disjunctiveFacets: ['category'],
});

// We keep track of all listeners listening to the results
const listeners = [];

helper.on('result', function(content) {
  // Call each listener with the content result
  listeners.forEach(listener =>
    listener(content, content.index === ASC_ORDER_INDEX),
  );
});

export const addListener = (
  listener: (content: AlgoliaResponse, orderAscend: boolean) => void,
) => {
  listeners.push(listener);

  return () => {
    // A function that will remove the specified listener
    const index = listeners.indexOf(listener);

    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
};

/**
 * Rank ordering is on a special index, we let the service handle this so
 * components don't need to know what service this is
 * @param {*} asc 
 */
export const setRankOrder = (asc: boolean) => {
  if (asc) {
    helper.setIndex(ASC_ORDER_INDEX);
  } else {
    helper.setIndex(INDEX);
  }
};
