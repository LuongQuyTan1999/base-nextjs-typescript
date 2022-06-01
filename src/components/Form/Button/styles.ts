import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.4rem;
  width: 100%;
  max-width: 100%;

  background: #ff8b00;
  border-radius: 1rem;
  border: none;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.mainColor};
  cursor: pointer;

  &:focus-visible {
    outline: none;
  }

  &.outline {
    border: 1px solid #ff8b00;
    background: #ffffff;
    color: #ff8b00;
  }

  &.outline-dark {
    border: 1px solid #171717;
    background: #ffffff;
    color: #171717;
    padding: 0.8rem 2.6rem;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.h-40 {
    height: 4rem;
  }
`;
