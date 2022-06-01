import styled from "styled-components";

export const SelectOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #a3a3a3;
  }

  .select__control {
    height: 4rem;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    padding: 0rem 1rem;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #171717;
    background: #fafafa;

    &:hover {
      border: 1px solid #e5e5e5;
    }

    &:active,
    &:focus,
    &:focus-visible,
    .select__control--is--focused {
      -webkit-box-shadow: 0 0 0 1px #ff8b00 !important;
      box-shadow: 0 0 0 1px #ff8b00 !important;
      outline-color: #ff8b00 !important;
      border: 1px solid #ff8b00 !important;
      border-color: #ff8b00 !important;
    }

    .select__indicator-separator {
      display: none;
    }
  }

  .select__value-container div {
    color: #171717;
  }

  .select__menu {
    border: none !important;
    border-radius: 10px;

    z-index: 9;

    .select__menu-list {
      background: #ffffff;
      border-radius: 10px;
      padding: 1rem 0rem;

      .select__menu-notice {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: #171717;
      }

      .select__option {
        padding: 1.3rem 1.8rem;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;

        color: #171717;
      }

      .select__option--is-focused,
      .select__option--is-selected {
        background: #ff8b00;
        color: #ffffff;
      }
    }
  }

  .isvalid .select__control {
    outline-color: red;
    border-color: red;
  }

  .text-error {
    color: red;
  }
`;
