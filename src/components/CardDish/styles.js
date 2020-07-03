import styled from 'styled-components'

export const Container = styled.div`
  max-width: 180px;
  width: 100%;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
  background-color: var(--color5);
  border-radius: 4px;
  margin: 20px auto 0;
`;

export const ImageDish = styled.div`
  img {
    width: 100%;
    border-radius: 4px 4px 0 0;
  }
`;

export const Description = styled.div`
  padding: 8px;

  p {
    color: var(--color2);
    font-weight: bold;
  }

  span {
    color: var(--color3);
  }
`;

export const EvaluationAndValue = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color1);
  padding: 8px;
  font-weight: bold;
`;


