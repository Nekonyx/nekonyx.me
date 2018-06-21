/**
 * Copyright (c) Leonard "Nekonyx" Timofeev. All rights reserved.
 * Licensed under the MIT License. See LICENSE for license information.
 */

import React from 'react';
import { render } from 'react-dom';

import 'modern-normalize/modern-normalize.css';
import 'assets/styles/index.css';

import App from 'components/App';

render(
  <App />,
  document.getElementById('root'),
);
