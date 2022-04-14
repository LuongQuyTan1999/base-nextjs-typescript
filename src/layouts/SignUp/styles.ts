import styled from "styled-components";

export const SignUpLayout = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 5rem;

  background: ${({ theme }) => theme.mainColor};

  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9rem;
  position: relative;

  height: 100%;
  width: 100%;
  padding-top: 10rem;

  .forge-ground {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 679px;

    img {
      object-fit: contain;
    }
  }

  @media (min-width: 1600px) {
    .forge-ground {
      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      height: 100%;

      img {
        object-fit: cover;
      }
    }
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 5rem 5rem 0rem;

  .right-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.8rem;

    background: ${({ theme }) => theme.primaryBlue};
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 30px;

    padding: 6rem 0rem;
    width: 100%;
    max-width: 56.4rem;
    height: 100%;
    max-height: 80rem;

    .title {
      font-weight: 700;
      font-size: 5.4rem;
      line-height: 7rem;
      color: ${({ theme }) => theme.mainColor};

      text-align: center;
      padding: 0rem 6rem;
    }

    .description {
      font-weight: 700;
      font-size: 2rem;
      line-height: 3rem;
      text-align: center;
      color: ${({ theme }) => theme.mainColor};
      opacity: 0.7;

      width: 100%;
      max-width: 36.6rem;
      margin-bottom: 3.2rem;
    }
  }
`;
