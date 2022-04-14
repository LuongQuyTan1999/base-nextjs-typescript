import styled from "styled-components";

export const Page404 = styled.div`
  position: relative;
  height: 100vh;

  background: url(/img/auth/bg-sign-in.webp) no-repeat center;
  background-size: cover;
`;

export const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0rem;

  padding: 0 2rem;
  height: 100%;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 10rem;
  }

  @media (min-width: 1441px) {
    gap: 15rem;
  }
`;

export const Left = styled.div`
  order: 2;

  .wrapper-img {
    position: relative;

    width: 35.3rem;
    height: 37.6rem;

    img {
      object-fit: contain;
    }
  }

  @media (min-width: 992px) {
    order: 1;

    .wrapper-img {
      width: 45.5rem;
      height: 47rem;
    }
  }

  @media (min-width: 1440px) {
    order: 1;

    .wrapper-img {
      width: 54.5rem;
      height: 51rem;
    }
  }
`;

export const Right = styled.div`
  width: 100%;
  max-width: 47rem;
  order: 1;

  .right-title {
    font-weight: 500;
    font-size: 3.8rem;
    line-height: 110%;

    color: ${({ theme }) => theme.mainColor};
    margin-bottom: 2rem;
  }

  .right-code {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;

    color: #ff88f7;
    margin: 0.8rem 0rem 2rem 0rem;
  }

  .right-label {
    font-weight: 500;
    line-height: 140%;
    font-size: 1.8rem;

    color: ${({ theme }) => theme.mainColor};
    opacity: 0.8;
  }

  .right-link {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.mainColor};
    margin-top: 1.2rem;

    a {
      text-decoration-line: underline;
      color: #0fd4ff;
    }
  }

  @media (min-width: 992px) {
    .right-title {
      font-size: 4rem;
      margin-bottom: 4rem;
    }

    .right-code {
      font-size: 1.6rem;
      line-height: 150%;
      margin: 1.4rem 0rem 4rem 0rem;
    }

    .right-label {
      font-size: 2rem;
    }

    .right-link {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1440px) {
    .right-title {
      font-size: 8rem;
    }

    .right-code {
      font-size: 2rem;
      line-height: 150%;
    }

    .right-label {
      font-size: 3rem;
    }

    .right-link {
      font-size: 1.8rem;
    }
  }
`;
