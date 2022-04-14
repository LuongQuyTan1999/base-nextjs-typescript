import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;

  .custom-button {
    margin: 2.2rem 0rem;
  }

  .sign-up {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.mainColor};

    a {
      font-weight: 700;
      color: ${({ theme }) => theme.mainColor};
    }
  }

  .profile {
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.mainColor};
    border-radius: 15px;
    padding: 1.5rem;

    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    color: ${({ theme }) => theme.mainColor};
    height: 8.4rem;
    cursor: pointer;

    & > div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 5.4rem;
      height: 5.4rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.mainColor};
    }

    & > div:last-child {
      flex: 1;
      text-align: center;
    }

    &:hover {
      background: ${({ theme }) => theme.mainColor};
      color: ${({ theme }) => theme.primaryBlue};

      & > div:first-child {
        background: #e5f6ff;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.8rem;

  width: 100%;
  padding: 0rem 8rem;
`;
