import React from 'react';
import styled from 'styled-components';

import CheckIconSVG from 'react-icons/lib/md/check';

const Checkbox = styled.span`
  transition: 0.3s ease all;
  position: relative;
  margin: 0;
  margin-bottom: 0.2em;
  margin-right: 0.5em;
  display: inline-block;

  width: 1em;
  height: 1em;

  border: 1px solid ${({ checked }) => (checked ? '#1B9EFF' : '#BBD7EC')};
  border-radius: 2px;
  vertical-align: middle;

  background-color: ${({ checked }) => (checked ? '#1B9EFF' : 'white')};

  &:hover {
    ${({ checked }) => !checked && `background-color: #F8FDFF`};
  }
`;

const CheckIcon = styled(CheckIconSVG)`
  position: absolute;
  top: 0;
  left: -.05em;
  bottom: 0;
  right: 0;
  margin: auto;
  color: white;
`;

export default props =>
  <Checkbox {...props}>
    {props.checked && <CheckIcon />}
  </Checkbox>;
