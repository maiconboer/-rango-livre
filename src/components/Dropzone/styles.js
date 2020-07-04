import styled from 'styled-components';

export const DropzoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .dropzone {
    width: 320px;
    height: 120px;
    background: var(--color5);
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    outline: 0;
  }

  .dropzone img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .dropzone p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color3);
  }

  .dropzone p svg {
    color: var(--color3);
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;
