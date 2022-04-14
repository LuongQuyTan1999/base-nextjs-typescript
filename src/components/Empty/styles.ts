import styled from "styled-components";

export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  div {
    position: relative;
    width: 41.5rem;
    height: 34rem;

    img {
      object-fit: contain;
    }
  }
`;
