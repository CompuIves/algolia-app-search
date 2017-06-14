// @flow
import React from 'react';
import styled from 'styled-components';
import truncate from 'lodash.truncate';

import Rating from './Rating';

const Container = styled.a`
  transition: 0.3s ease all;
  flex: 25%;
  width: 25%;
  max-width: 25%;
  height: 8em;
  padding: 1em 0;
  background-color: white;
  color: #54666C;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  text-decoration: none;

  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: white;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
    z-index: 20;
  }

  @media (max-width: 440px) {
    flex: 50%;
    width: 50%;
    max-width: 50%;
  }
`;

const Image = styled.img`
  display: block;
  border-radius: 4px;
  margin: auto;
  margin-bottom: 0.5em;
`;

const Title = styled.h2`
  margin: 0;
  font-size: .875em;
  font-weight: 400;
  word-wrap: break-word;
`;

type Props = {
  name: string,
  appUrl: string,
  imageUrl: string,
  rating: number,
  ratingCount: number,
  price: string,
};

export default ({
  name,
  appUrl,
  imageUrl,
  rating,
  ratingCount,
  price,
}: Props) =>
  <Container href={appUrl} target="_blank" rel="noopener noreferrer">
    <Image height={57} width={57} async src={imageUrl} alt={name} />
    <Rating rating={rating} ratingCount={ratingCount} />
    <Title title={name}>
      {truncate(name, {
        length: 20,
      })}
    </Title>
  </Container>;
