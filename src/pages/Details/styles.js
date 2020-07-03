import styled from 'styled-components'

export const Container = styled.div`
  max-width: 360px;
  width: 100%;
  color: var(--color5);
  margin: 0 auto;
`;

export const Content = styled.div`
  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 16px 0 16px;
    color: var(--color2);
    font-size: 18px;
    font-weight: bold;

    span {
      color: var(--color1);
    }
  }

  .price {
    color: var(--color1);
    margin: 4px 16px 8px 16px;
    font-weight: bold;
  }

  .about-place {
    color: var(--color3);
    margin: 4px 16px 16px 16px;

  }
  }

`;

export const ImageDish = styled.div`
  background-size: cover;
  margin: 0 auto;
  filter: brightness(90%);

  a {
    position: absolute;
    font-size: 16px;
    font-weight: bold;
    color: var(--color5);
    text-decoration: none;
    padding: 10px;

    span {
      display: flex;
      align-items: center;
      filter: brightness(300%);
    }
  }

  img {
    max-width: 800px;
    width: 100%;
    height: 210px;
    border-radius: 0px 0px 18px 18px;
  }
`;

export const ContainerDish = styled.div`
  max-width: 360px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 0 10px;

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

