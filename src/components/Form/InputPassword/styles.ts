import styled from "styled-components";
import { motion } from "framer-motion";

export const InputPassword = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

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
      padding: 2rem 1.6rem;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.2rem;
    }

    input.isvalid {
      outline-color: red;
      border: 1px solid red !important;
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
    color: red;
  }
`;
