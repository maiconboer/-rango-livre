import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  padding: 40px 10px;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  align-items: center;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 36px 0;
    width: 340px;
    text-align: center;

    h1 {
      font-size: 24px;
      color: #555;
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        filter: brightness(80%);
      }
    }
  }

  /* pegando próximo nível de ancora/link */
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: all 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      filter: brightness(80%);
    }

    svg {
      margin-right: 8px;
    }
  }
`;
