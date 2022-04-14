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
  color: ${({ theme }) => theme.mainText};
  cursor: pointer;
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 2.4rem;

  .address {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.mainText};
  }

  .custom-button {
    display: flex;
    gap: 1.2rem;

    background: ${({ theme }) => theme.primaryBlue};
    box-shadow: 0px 4px 10px rgba(0, 117, 255, 0.25);
    border-radius: 22px;

    max-width: 13.4rem;
    height: 4.4rem;
  }
`;
