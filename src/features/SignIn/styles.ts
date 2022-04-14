import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;

  .remember {
    display: flex;
    justify-content: center;

    color: ${({ theme }) => theme.mainText};
    background: #e5f6ff;
    padding: 1.2rem 0rem;
    width: 100%;
  }

  .forgot {
    a {
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: ${({ theme }) => theme.primary};
    }
  }

  .custom-button {
    margin: 2.2rem 0rem;
  }

  .sign-up {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.mainText};

    a {
      font-weight: 700;
      color: ${({ theme }) => theme.primary};
    }
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .icon {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #0075ff;
      border-radius: 50%;
      padding: 1.2rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.8rem;

  width: 100%;
  padding: 0rem 6rem;
`;
