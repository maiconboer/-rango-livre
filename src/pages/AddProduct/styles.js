import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  color: var(--color5);
  margin: 0 auto;
`;

export const Content = styled.div`
  span {
    color: var(--color1);
  }

  a {
    text-decoration: none;

    span {
      display: flex;
      margin: 0px 16px;
      color: var(--color1);
      font-weight: bold;
    }
  }
`;

export const UserData = styled.div`
  background-color: var(--color1);
  border-radius: 0 0 20px 20px;
  padding: 20px;
  margin-bottom: 16px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .total {
    margin-top: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ContainerForm = styled.div`
  form {
    width: 320px;
    margin: 0 auto 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input,
    button {
      width: 100%;
    }

    input {
      margin-top: 16px;
      border: none;
      padding: 8px;
      border-radius: 4px;
    }

    button {
      margin-top: 16px;
      border: none;
      padding: 8px;
      background-color: var(--color1);
      color: var(--color5);
      font-weight: bold;
      border-radius: 4px;
    }
  }
`;
