import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonUpload = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  position: relative;

  height: 4.4rem;
  width: 100%;

  background: ${({ theme }) => theme.mainColor};
  border: 1px solid #0e2667;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.mainText};
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
  }
`;
