// @flow
import React from 'react';
import styled from 'styled-components';

import type { Hit } from '../../../services/algolia.types';
import App from './App';
import Flex from '../../Flex';

import fadein from '../../../utils/animations/fade-in';

const Container = styled.div`
  ${fadein(0)};
  margin-top: 0.5em;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
`;

const Items = styled(Flex)`
  height: 100%;
  flex-wrap: wrap;
`;

type Props = {
  hits: Hit[],
};

export default class Results extends React.PureComponent {
  props: Props;

  render() {
    const { hits } = this.props;
    return (
      <Container>

        <Items>
          {hits.map(hit =>
            <App
              key={hit.name}
              name={hit.name}
              rating={hit.rating}
              ratingCount={hit.ratingCount}
              imageUrl={hit.image}
              appUrl={hit.link}
              price={hit.price}
            />,
          )}
        </Items>
      </Container>
    );
  }
}
