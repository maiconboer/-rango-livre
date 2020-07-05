import styled from 'styled-components';

export const Container = styled.div`
  max-width: 360px;
  width: 100%;
  color: var(--color5);
  margin: 0 auto;
`;

export const Content = styled.div`
  .backToDetail {
    margin: 16px;
    color: var(--color1);
    font-weight: bold;
    font-size: 16px;

    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
`;

export const UserData = styled.div`
  background-color: var(--color1);
  border-radius: 0 0 20px 20px;
  padding: 20px;

  h2 {
    /* text-align: center; */
    margin-bottom: 20px;
  }

  .total {
    margin-top: 16px;
    font-size: 16px;
    font-weight: bold;
  }

  .historic-transfer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    a {
      display: flex;
      font-weight: 700;
      text-decoration: none;
      color: var(--color5);
      margin-top: 16px;

      :last-child {
        margin-top: 8px;
      }
    }
  }
`;

export const Cash = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  margin: 8px 0;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 8px;
  }
`;

export const ContainerForm = styled.div`
  max-width: 280px;
  margin: 16px auto;

  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      input[type='checkbox'] {
        width: 24px;
        height: 24px;
        margin-right: 16px;
        margin-bottom: 0;
      }

      input[type='radio'] {
        width: 16px;
        height: 16px;
        margin-right: 8px;
        margin-bottom: 0;
      }

      label {
        font-size: 16px;
        color: #555;
        margin-right: 16px;
      }
    }
  }

  input {
    border: 0;
    color: var(--color3);
    background: var(--color5);
    border-radius: 10px;
    padding: 8px;
    width: 280px;
    height: 50px;
    display: flex;
    border: 2px solid var(--color5);
    margin-bottom: 16px;
  }
`;
