import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';


export const Container = styled.div`
  background: var(--color5);
  margin:  0 auto;
  border-radius: 10px;
  padding: 8px;
  width: 282px;
  display: flex;
  border: 2px solid var(--color5);
  color: var(--color3);

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #ff9000;
      color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--color1);
    `}

  input {
    flex: 1;
    /* background: transparent; */
    border: 0;
    color: var(--color3);

    ::placeholder {
      color: var(--color3);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: var(--color5);

    &::before {
      border-color: #c53030 transparent;
    }
  }

`;
