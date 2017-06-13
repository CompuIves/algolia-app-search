import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: .75em;
  margin-bottom: 0.125em;
`;

const TotalRating = styled.span`
  color: #aaa;
`;

type Props = {
  rating: number,
  ratingCount: number,
};

const shortenCount = (ratingCount: number) => {
  if (ratingCount >= 1000000) {
    return `${(ratingCount / 1000000).toFixed(1)}m`;
  }
  if (ratingCount >= 1000) {
    return `${(ratingCount / 1000).toFixed(1)}k`;
  }

  return `${ratingCount}`;
};

export default ({ rating, ratingCount }: Props) =>
  <Container>
    {rating}<TotalRating>/5</TotalRating> ({shortenCount(ratingCount)})
  </Container>;
