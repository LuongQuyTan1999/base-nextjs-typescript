import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 5rem;
  width: 100%;
  max-width: 100%;

  background: ${({ theme }) => theme.primaryLinear};
  border-radius: 3rem;
  border: none;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.mainColor};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.primary};
    box-shadow: 0px 10px 20px rgba(237, 49, 151, 0.2);
  }

  &.primary-blue {
    background: ${({ theme }) => theme.primaryBlueLinear};

    &:hover {
      background: ${({ theme }) => theme.primaryBlue};
      box-shadow: 0px 10px 20px rgba(0, 117, 255, 0.2);
    }
  }

  &.primary-white {
    background: #ffffff;
    box-shadow: 0px 10px 20px rgba(0, 117, 255, 0.2);
    color: ${({ theme }) => theme.primaryBlue};

    &:hover {
      background: ${({ theme }) => theme.primaryBlueLinear};
      box-shadow: 0px 10px 20px rgba(0, 117, 255, 0.2);
      color: ${({ theme }) => theme.mainColor};
    }
  }

  &.primary-outline-pink {
    background: #ffffff;
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};

    &:hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.mainColor};
    }
  }

  &.primary-outline-dark {
    background: #ffffff;
    color: ${({ theme }) => theme.mainText};
    border: 1px solid #0e2667;

    &:hover {
      background: #0e2667;
      color: ${({ theme }) => theme.mainColor};
      box-shadow: none;
    }
  }

  &:focus-visible {
    outline: none;
  }

  &.disabled {
    background: #aeb9d3;
    opacity: 0.5;
    pointer-events: none;
  }

  &.w-330 {
    max-width: 33rem;
  }
`;
