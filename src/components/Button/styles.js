import styled from 'styled-components';

export const Container = styled.button`
  background: var(--color1);
  color: var(--color5);
  border-radius: 10px;
  border: 0;
  padding: 16px;
  width: 282px;
  font-weight: 700;
  margin-top: 16px;
  transition: all 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;
