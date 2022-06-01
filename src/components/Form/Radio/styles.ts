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
  gap: 0.8rem;

  label {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #171717;
    cursor: pointer;
  }

  input {
    border-radius: 50%;
    border: 2px solid #a3a3a3;
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
      border: 2px solid #ff8b00;
    }

    &:checked:after {
      background-color: #ff8b00;
      border: 1px solid #ff8b00;
    }
  }
`;

export const Title = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  color: #171717;

  margin-bottom: 1.2rem;
`;
