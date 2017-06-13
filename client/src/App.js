import React, { Component } from 'react';
import styled from 'styled-components';

import Title from './components/Title';
import Search from './components/Search';

const Container = styled.div`
  position: relative;
  max-width: 960px;
  margin: 5% auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Title>Algolia App Search</Title>
        <Search />
      </Container>
    );
  }
}

export default App;
