import styled from "styled-components";
import { motion } from "framer-motion";

export const InputPassword = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label,
  div {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #6a7ba7;
  }

  .input-wrapper {
    position: relative;

    input {
      width: 100%;
      height: 4.8rem;
      background: #ffffff;
      border: 1px solid #dadfee;
      border-radius: 10px;
      padding: 2rem 1.6rem;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.2rem;
    }

    input.isvalid {
      outline-color: #fd4a23;
      border: 0.75px solid #fd4a23 !important;
    }

    div {
      position: absolute;
      right: 0;
      top: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;

      color: ${({ theme }) => theme.mainColor};
      border-radius: 8px;
      width: 82px;
      height: 100%;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    .isHide svg {
      .line-hide {
        display: none;
      }
    }
  }

  .text-error {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #e95534;
  }
`;
