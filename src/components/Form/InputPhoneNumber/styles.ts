import styled from "styled-components";
import { motion } from "framer-motion";

export const InputPhoneNumberWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  position: relative;

  label {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #a3a3a3;
  }

  .text-error {
    color: red;
  }

  .PhoneInput {
    background: #ffffff;

    border-radius: 6px;
    padding: 0rem 1.6rem;
    width: 100%;
    height: 4rem;
    display: flex;

    input {
      width: 100%;
      height: 4rem;
      border: 1px solid #e5e5e5;

      border-radius: 10px;
      font-size: 1.4rem;
      line-height: 2.2rem;
      color: #171717;
      box-shadow: none !important;
      background: #fafafa;

      position: absolute;
      left: 0;
      padding: 2rem 1.6rem 2rem 5rem;

      &:active,
      &:focus,
      &:visited,
      &:focus-visible {
        -webkit-outline: 1px solid #ff8b00;
        outline: 1px solid #ff8b00;
        border: 1px solid #ff8b00 !important;
      }
    }

    &.isvalid {
      input {
        outline-color: 1px solid red;
        border: 1px solid red;
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
`;
