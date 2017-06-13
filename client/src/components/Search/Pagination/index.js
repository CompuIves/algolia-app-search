// @flow
import React from 'react';
import styled, { css } from 'styled-components';

import RightIcon from 'react-icons/lib/go/chevron-right';
import LeftIcon from 'react-icons/lib/go/chevron-left';

type Props = {
  totalPageCount: number,
  page: number,
  setPage: (page: number) => void,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.25em;
  text-align: center;
  width: 100%;
  line-height: 2em;
  line-height: 1.5em;
  vertical-align: middle;
`;

const NavigationButton = styled.span`
  transition: 0.3s ease all;
  display: inline-block;
  vertical-align: middle;
  margin: 0 1rem;
  font-size: 1.5em;

  ${({ onClick }) =>
    onClick
      ? css`
      cursor: pointer;

      &:hover {
        color: rgba(255, 255, 255, 0.8);
      }
  `
      : css`color: rgba(255, 255, 255, 0.5);`}
`;

export default ({ totalPageCount, page, setPage }: Props) => {
  // We want to keep the pages user friendly (so no 0 page), add 1
  const addedPage = page + 1;

  const prevPageFunction = addedPage > 0 && (() => setPage(page - 1));
  const nextPageFunction =
    addedPage < totalPageCount && (() => setPage(page + 1));

  return (
    <Container>
      <NavigationButton onClick={prevPageFunction}>
        <LeftIcon />
      </NavigationButton>
      <span><strong>{addedPage}</strong><span>/{totalPageCount}</span></span>

      <NavigationButton onClick={nextPageFunction}>
        <RightIcon />
      </NavigationButton>
    </Container>
  );
};
