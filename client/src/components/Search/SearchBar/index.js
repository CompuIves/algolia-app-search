// @flow
import React from 'react';
import styled from 'styled-components';

import CloseIconSVG from 'react-icons/lib/md/close';
import fadeinEffect from '../../../utils/animations/fade-in';

const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  transition: 0.3s ease all;

  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: 1.25rem;

  padding: 0 1.25rem;
  padding-right: 2.5rem;

  color: #2D568D;
  font-size: 1.125rem;
  vertical-align: middle;

  border: 1px solid transparent;
  outline: none;

  white-space: normal;

  ::-webkit-input-placeholder {
    color: #BFBFBF;
  }

  &:focus {
    border-color: #3CC8F5;
  }
`;

const CloseIcon = styled(CloseIconSVG)`
  transition: 0.3s ease all;

  position: absolute;
  right: 1rem;
  top: 0;
  bottom: 0;
  margin: auto 0;

  font-size: 1.25rem;

  color: #2D568D;
  cursor: pointer;

  ${fadeinEffect(0)}
`;

type Props = {
  value: string,
  setValue: (search: string) => void,
};
export default class SearchBar extends React.PureComponent {
  props: Props;

  updateValue = (e: KeyboardEvent & { target: HTMLInputElement }) => {
    if (e) {
      this.props.setValue(e.target.value);
    }
  };

  clearSearch = () => {
    this.props.setValue('');
  };

  render() {
    const { value } = this.props;
    return (
      <Container>
        <Input
          value={value}
          onChange={this.updateValue}
          placeholder="Search for an app"
        />
        {value && <CloseIcon onClick={this.clearSearch} />}
      </Container>
    );
  }
}
