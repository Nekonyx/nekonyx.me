/**
 * Copyright (c) Leonard "Nekonyx" Timofeev. All rights reserved.
 * Licensed under the MIT License. See LICENSE for license information.
 */

import styled from 'styled-components';

export const onMobile = '@media (min-width: 320px) and (max-width: 1025px)';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 8em;
  align-items: flex-end;
  justify-content: space-between;

  ${onMobile} {
    padding: 3em 1.4em;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  h1, h2 {
    margin: 0;
  }

  h1 {
    animation: fadeInDown ease-in-out .6s;
    font-size: 3em;
    letter-spacing: 11.5px;

    ${onMobile} {
      font-size: 2em;
      letter-spacing: 6px;
    }
  }

  h2 {
    letter-spacing: 1px;
    font-weight: 400;
    margin-top: 1em;
    font-size: 1em;

    ${onMobile} {
      font-size: .8em;
    }
  }

  span {
    cursor: pointer;
    transition: .2s;
  }
`;
