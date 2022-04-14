import styled from "styled-components";
import { motion } from "framer-motion";

export const InputPhoneNumberWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  position: relative;

  label {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #6a7ba7;
  }

  .text-error {
    color: red;
  }

  .PhoneInput {
    background: #ffffff;

    border-radius: 6px;
    padding: 0rem 1.6rem;
    width: 100%;
    height: 4.8rem;
    display: flex;

    input {
      width: 100%;
      height: 4.8rem;
      background: #ffffff;
      border: 1px solid #dadfee;
      border-radius: 10px;
      font-size: 1.4rem;
      line-height: 2.2rem;
      color: ${({ theme }) => theme.mainText};
      box-shadow: none;

      position: absolute;
      left: 0;
      padding: 2rem 1.6rem 2rem 5rem;

      &:active,
      &:focus,
      &:visited,
      &:focus-visible {
        -webkit-outline: 1px solid ${({ theme }) => theme.primaryBlue};
        outline: 1px solid ${({ theme }) => theme.primaryBlue};
        border: 1px solid ${({ theme }) => theme.primaryBlue} !important;
        box-shadow: 0px 5px 15px rgba(0, 117, 255, 0.15);
      }
    }

    &.is-valid {
      input {
        outline-color: #fd4a23;
        border: 0.75px solid #fd4a23 !important;
      }
    }

    .PhoneInputCountry {
      z-index: 2;
    }

    .PhoneInputCountryIcon {
      box-shadow: none;
      font-size: 1.6rem;
      border-radius: 50%;
      width: 2.4rem;
      height: 2.4rem;

      img {
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .PhoneInputCountrySelectArrow {
      display: none;
    }
  }

  .text-error {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #e95534;
  }
`;
