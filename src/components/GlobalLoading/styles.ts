import styled from "styled-components";

export const GlobalLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.6);

  img {
    border-radius: 10px;
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  width: 30rem;
  height: 27rem;
`;
