import styled from 'styled-components';

export const Container = styled.button`
  background: var(--color1);
  color: var(--color5);
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 282px;
  font-weight: 500;
  margin-top: 16px;
  transition: all 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;
