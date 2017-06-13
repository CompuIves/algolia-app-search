// @flow
import React from 'react';
import styled from 'styled-components';
import ArrowIcon from 'react-icons/lib/go/chevron-down';

const InfoMessage = styled.div`
  font-size: .875em;
  margin-top: 1em;
`;

const OrderInfo = styled.span`
  transition: 0.3s ease all;
  float: right;
  text-align: right;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  svg {
    transition: 0.3s ease transform;
    transform: rotateZ(${props => (props.asc ? '180deg' : '0deg')});
  }
`;

const OrderingIcon = styled(ArrowIcon)`
  vertical-align: middle;
`;

type Props = {
  processingTime: number,
  totalHitCount: number,
  toggleOrdering: () => void,
  orderAscend: boolean,
};

export default ({
  processingTime,
  totalHitCount,
  toggleOrdering,
  orderAscend,
}: Props) =>
  <InfoMessage>
    <span>{totalHitCount} search results in {processingTime}ms</span>
    <OrderInfo onClick={toggleOrdering} asc={orderAscend}>
      Order by rank <OrderingIcon />
    </OrderInfo>
  </InfoMessage>;
