import styled from "styled-components";

export const SignInLayout = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;

  background: url(/img/auth/bg-sign-in.webp) no-repeat center;
  background-size: cover;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  padding: 5rem;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9rem;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;

  .right-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.8rem;

    background: ${({ theme }) => theme.mainColor};
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
      color: ${({ theme }) => theme.primaryBlue};

      text-align: center;
      margin-bottom: 3.2rem;
      padding: 0rem 6rem;
    }
  }
`;
