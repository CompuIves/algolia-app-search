// @flow
import React from 'react';

import SearchBar from './SearchBar';
import SearchInfo from './SearchInfo';
import CategoryList from './CategoryList';
import Results from './Results';
import Pagination from './Pagination';
import Flex from '../Flex';
import SubTitle from '../SubTitle';

import { addListener, setRankOrder, helper } from '../../services/algolia';
import type { AlgoliaResponse } from '../../services/algolia.types';

type State = {
  query: string,
  searchState: ?AlgoliaResponse,
  orderAscend: boolean,
};

export default class Search extends React.PureComponent {
  state: State = {
    query: '',
    searchState: null,
    orderAscend: false,
  };

  unlisten: () => void;

  componentDidMount() {
    // We keep unlisten on the class so we can unlisten when the component unmounts
    this.unlisten = addListener(this.handleNewResults);
    helper.search();
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  handleNewResults = (content: AlgoliaResponse, orderAscend: boolean) => {
    // orderAscend is given by algolia service, the service should only know
    // which index is responsible for orderAscend sort
    this.setState({
      searchState: content,
      orderAscend,
    });
  };

  /**
   * Set the search query
   */
  setSearch = (query: string) => {
    this.setState({ query }, () => {
      helper.setQuery(query).search();
    });
  };

  /**
   * Toggle the refinement of specified category
   */
  toggleCategory = (category: string) => {
    helper.toggleFacetRefinement('category', category).search();
  };

  toggleOrdering = () => {
    setRankOrder(!this.state.orderAscend);
    helper.search();
  };

  /**
   * Set the search page
   */
  setPage = (page: number) => {
    helper.setPage(page).search();
  };

  render() {
    const { query, searchState, orderAscend } = this.state;

    if (searchState == null) return <SubTitle>Loading...</SubTitle>;

    return (
      <Flex>
        <CategoryList
          categories={searchState.getFacetValues('category', {
            sortBy: ['count:desc'],
          })}
          toggleCategory={this.toggleCategory}
        />

        <div style={{ flex: 1 }}>
          <SearchBar value={query} setValue={this.setSearch} />

          <SearchInfo
            processingTime={searchState.processingTimeMS}
            toggleOrdering={this.toggleOrdering}
            orderAscend={orderAscend}
            totalHitCount={searchState.nbHits}
          />
          <Results hits={searchState.hits} />

          <Pagination
            totalPageCount={searchState.nbPages}
            page={searchState.page}
            setPage={this.setPage}
          />
        </div>
      </Flex>
    );
  }
}
