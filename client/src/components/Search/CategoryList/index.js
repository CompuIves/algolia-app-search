// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import type { CategoryData } from '../../../services/algolia.types';

import Category from './Category';
import Card from '../../Card';
import fadein from '../../../utils/animations/fade-in';

type Props = {
  categories: Array<CategoryData>,
  toggleCategory: (category: string) => void,
};

const CategoryCard = styled(Card)`
  ${fadein(0)};
  display: inline-block;
  text-align: left;
  margin-right: 1em;
  padding: 0.5em 1em;
  width: 15em;
  font-size: .875em;

  @media (max-width: 830px) {
    display: none;
  }
`;

const CategoryTitle = styled.div`
  font-size: 1.125em;
  font-weight: 400;
  margin-top: 0.25em;
  margin-bottom: 1em;
`;

class CategoryList extends Component {
  props: Props;

  render() {
    const { categories, toggleCategory } = this.props;

    return (
      <CategoryCard>
        <CategoryTitle>Category</CategoryTitle>
        <div>
          {categories.map(cat =>
            <Category
              key={cat.name}
              name={cat.name}
              count={cat.count}
              checked={cat.isRefined}
              toggleCategory={toggleCategory}
            />,
          )}
        </div>
      </CategoryCard>
    );
  }
}

export default CategoryList;
