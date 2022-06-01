import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuTab = styled(motion.div)`
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 1rem;
  padding: 1rem 2rem;
  cursor: pointer;

  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #a3a3a3;

  &.active {
    border: 1px solid #ff8b00;
    color: #171717;
  }
`;
