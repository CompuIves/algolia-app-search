// @flow

export type HighlightResult = {
  value: string,
  matchLevel: string,
  matchedWords: string[],
};

export type Hit = {
  category: string,
  rating: number,
  name: string,
  image: string,
  link: string,
  ratingCount: number,
  price: string,
  objectID: string,
  _highlightResult: {
    category: HighlightResult,
    name: HighlightResult,
    price: HighlightResult,
  },
};

export type Facet = {
  name: string,
  data: {
    [category: string]: number,
  },
  exhaustive: boolean,
};

export type CategoryData = {
  name: string,
  count: number,
  isRefined: boolean,
  isExcluded: boolean,
};

export type AlgoliaResponse = {
  query: string,
  hits: Hit[],
  index: string,
  hitsPerPage: number,
  nbHits: number,
  nbPages: number,
  page: number,
  processingTimeMS: number,
  facets: Facet[],
  getFacetValues: (facet: string, opts?: Object) => Array<CategoryData>,
};
