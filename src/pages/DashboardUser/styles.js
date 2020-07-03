import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  color: var(--color5);
  margin: 0 auto;
`;

export const Content = styled.div`
  .suggestions {
    color: var(--color2);
    margin: 20px 20px 0 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--color1);
    }
  }
`;

export const UserData = styled.div`
  background-color: var(--color1);
  border-radius: 0 0 20px 20px;
  padding: 20px;

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

  .historic-transfer {
    display: flex;
    justify-content: space-evenly;
    margin-top: 16px;
    text-align: center;

    @media screen and (max-width: 520px ) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    a {
      display: flex;
      text-decoration: none;
      color: var(--color5);

      @media screen and (max-width: 520px ) {
        margin-top: 8px
    }
    }
  }
`;

export const Cash = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 400px;
  margin: 8px auto;


  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 4px;
  }
`;

export const ContainerDish = styled.div`
  max-width: 800px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 0 10px;

  @media screen and (max-width: 620px ) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 480px ) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ShoppingCart = styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--color1);
  border-radius: 50%;
  margin: 26px auto;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-left: -2px;
  }
`;
