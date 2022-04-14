import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  .text-error {
    color: red;
  }

  .horizontal {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2.4em;
  }

  .vertical {
    display: flex;
    flex-direction: column;
    gap: 2.4em;
  }
`;

export const Checkbox = styled.div`
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
    background-color: #ffffff;
    border: 2px solid #6a7ba7;
    border-radius: 2px;
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
    }

    &:checked {
      -webkit-appearance: auto;

      border: none;
      background: ${({ theme }) => theme.primaryBlue};
    }
  }
`;

export const Title = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.mainText}

  margin-bottom: 1.2rem;
`;
