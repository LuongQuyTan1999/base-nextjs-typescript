import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;

  label,
  div {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #a3a3a3;
  }

  .input-wrapper {
    position: relative;

    input {
      width: 100%;
      height: 4rem;
      background: #fafafa;
      border-radius: 10px;
      border: 1px solid #e5e5e5;
      padding: 0.8rem 1.8rem;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.2rem;
    }

    input.is-valid {
      outline-color: 1px solid red;
      border: 1px solid red !important;
    }

    &.search {
      input {
        padding: 2rem 1.6rem 2rem 4.6rem;
        border: none;
      }

      &:after {
        content: "";
        background: url(/img/form/search.svg) no-repeat center;
        background-size: cover;
        display: block;
        position: absolute;
        left: 1.4rem;
        top: 0.8rem;

        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }

  .text-error {
    color: red;
  }
`;
