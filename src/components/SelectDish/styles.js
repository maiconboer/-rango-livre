import styled from 'styled-components'

export const Container = styled.div`
  max-width: 360px;
  width: 100%;
  border-radius: 4px;
`;

export const ImageAndDescription = styled.div`
  display: flex;
  margin-bottom: 8px;

  img {
    width: 22%;
    height: auto;
    border-radius: 4px;
  }

  div {
    padding: 0px 4px;
    margin-left: 4px;
  }

  p {
    color: var(--color2);
    font-weight: bold;
  }

  span {
    color: var(--color3);
  }
`;

export const AddQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: -6px;

  span {
    color: var(--color1);
    font-weight: bold;
  }

  div {
    display: flex;

    input {
      width: 30px;
      height: 22px;
      background-color: var(--color5);
      border: none;
      text-align: center;
    }

    svg {
      background-color: var(--color1);
      color: var(--color5);
      border-radius: 4px;
      padding: 4px;
    }
  }
`;

export const ShowQuantity = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .price {
      color: var(--color1);
      font-weight: bold;
    }

  div {
    width: 70px;

    p {
      font-size: 12px;
      color: var(--color3);
    }
  }
`;
