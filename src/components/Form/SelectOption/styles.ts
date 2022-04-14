import styled from "styled-components";

export const SelectOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #6a7ba7;
  }

  .select__control {
    height: 4.8rem;
    background: #ffffff;
    border: 1px solid #dadfee;
    border-radius: 10px;
    padding: 0rem 1rem;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.mainText};

    &:hover {
      border: 1px solid #dadfee;
    }

    &:active,
    &:focus,
    &:focus-visible,
    .select__control--is--focused {
      -webkit-outline: 1px solid ${({ theme }) => theme.primaryBlue};
      outline: 1px solid ${({ theme }) => theme.primaryBlue};
      border: 1px solid ${({ theme }) => theme.primaryBlue} !important;
      box-shadow: 0px 5px 15px rgba(0, 117, 255, 0.15);
      outline-color: ${({ theme }) => theme.primaryBlue} !important;
      border-color: ${({ theme }) => theme.primaryBlue} !important;
    }

    .select__indicator-separator {
      display: none;
    }
  }

  .select__value-container div {
    color: ${({ theme }) => theme.mainText};
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
        color: ${({ theme }) => theme.mainText};
      }

      .select__option {
        padding: 1.3rem 1.8rem;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;

        color: ${({ theme }) => theme.mainText};
      }

      .select__option--is-focused,
      .select__option--is-selected {
        background: #ff8b00;
        color: #ffffff;
      }
    }
  }

  .is-valid .select__control {
    outline-color: #fd4a23;
    border: 0.75px solid #fd4a23 !important;
  }

  .text-error {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #e95534;
  }
`;
