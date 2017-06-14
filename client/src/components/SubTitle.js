import styled from 'styled-components';

const SubTitle = styled.h2`
  font-weight: 300;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  text-align: center;
  font-size: 1.5em;
`;

export default SubTitle;

// Also export a div version with same styles
export const DivSubTitle = SubTitle.withComponent('div');
