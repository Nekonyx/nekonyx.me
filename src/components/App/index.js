/**
 * Copyright (c) Leonard "Nekonyx" Timofeev. All rights reserved.
 * Licensed under the MIT License. See LICENSE for license information.
 */

import React from 'react';

import { Wrapper, Container } from './styles';

export class AppComponent extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <h1>Nekonyx</h1>
          <h2>Someone, who lives somewhere</h2>
        </Container>
      </Wrapper>
    );
  }
}

export default AppComponent;
