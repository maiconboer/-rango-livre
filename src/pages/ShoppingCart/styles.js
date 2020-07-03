import styled from 'styled-components'

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
  margin-bottom: 16px;

  .total {
    margin-top: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
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
  max-width: 360px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ShoppingCartIcon = styled.div`
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

export const PurchaseDetails = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    align-items: center;
    color: var(--color1);
    margin-top: 16px;
    font-weight: bold;
  }

  svg {
    background-color: var(--color1);
    color: var(--color5);
    border-radius: 50%;
    padding: 8px;
    margin-right: 8px;
  }
`;

export const CheckOut = styled.div`
  .btnCheckOut {
    background-color: var(--color1);
    width: 224px;
    height: 44px;
    border-radius: 4px;
    margin: 30px auto;
    text-transform: uppercase;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color5);
    text-decoration: none;
  }

  svg {
    margin-right: 4px;
  }
`;

export const SelectPaymentMethod = styled.div`

  .paymentMethod {
    display: none;
    background-color: var(--color5);
    border-radius: 4px;
    position: absolute;
    top: 200px;
    left: 24px;
  }


  .active {
    display: flex;
    flex-direction: column;
    padding: 16px;

    h2 {
      color: var(--color1);
      margin-bottom: 16px;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: bold;
    }

    span {
      display: flex;
      color: var(--color3);
      margin-bottom: 16px;
      font-weight: bold;
    }

    svg {
      color: var(--color3);
      margin-right: 8px
    }

    input {
      border: none;
      background-color: var(--color4);
      padding: 8px;
      border-radius: 4px;
      margin-bottom: 16px;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
    }

    .btn-confirm,
    .btn-cancel {
      width: 136px;
      height: 38px;
      border: none;
      color: var(--color5);
      border-radius: 4px;
    }

    .btn-confirm {
      background-color: #6BD589;
    }

    .btn-cancel {
      background-color: #EB745A;
    }
  }
`;
