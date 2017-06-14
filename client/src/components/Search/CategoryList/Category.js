// @flow
import React from 'react';
import styled from 'styled-components';

import Checkbox from '../../Checkbox';

const Container = styled.div`
  padding: 0.25em 0;
  vertical-align: middle;

  cursor: pointer;
`;

const Count = styled.div`
  float: right;
  font-size: .75em;
  text-align: right;
  background-color: #EAEAEA;
  color: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  padding: 2px 4px;
`;

type Props = {
  toggleCategory: (category: string) => void,
  name: string,
  count: number,
  checked: boolean,
};

export default class Category extends React.PureComponent {
  props: Props;

  handleClick = () => {
    this.props.toggleCategory(this.props.name);
  };

  render() {
    const { name, count, checked } = this.props;
    return (
      <Container onClick={this.handleClick}>
        <Checkbox checked={checked} />
        {name}
        <Count>{count}</Count>
      </Container>
    );
  }
}
