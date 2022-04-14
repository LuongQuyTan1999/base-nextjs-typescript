import styled from "styled-components";

export const RadioWrapper = styled.div`
  .text-error {
    color: red;
  }

  .horizontal {
    display: flex;
    gap: 2.4rem;
  }

  .vertical {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
`;

export const Radio = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  label {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    cursor: pointer;

    color: ${({ theme }) => theme.mainText};
  }

  input {
    border-radius: 50%;
    border: 2px solid #6a7ba7;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    position: relative;
    -webkit-appearance: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
      content: "";
      display: block;
      border-radius: 25px;

      height: 1.2rem;
      width: 1.2rem;
    }

    &:checked {
      border: 2px solid ${({ theme }) => theme.primaryBlue};
    }

    &:checked:after {
      background-color: ${({ theme }) => theme.primaryBlue};
      border: 1px solid ${({ theme }) => theme.primaryBlue};
    }
  }
`;

export const Title = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.mainText};

  margin-bottom: 1.2rem;
`;
