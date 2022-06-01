import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled.div`
  background: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  font-weight: 700;
  font-size: 3rem;
  line-height: 2.2rem;
  color: #171717;
`;

export const Back = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #a3a3a3;
  cursor: pointer;
`;

export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  .cheat-popover {
    margin-right: 4rem;
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  margin-left: 4rem;
  cursor: pointer;

  .username {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #171717;
  }

  .avatar {
    position: relative;
    width: 3.8rem;
    height: 3.8rem;
    border: 2px solid #ff8b00;
    box-shadow: 0px 4px 10px #ff8b00;
    border-radius: 50%;
    padding: 1px;
  }
`;
