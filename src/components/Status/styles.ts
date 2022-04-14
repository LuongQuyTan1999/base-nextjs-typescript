import styled from "styled-components";

export const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  text-align: center;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 0rem 1.2rem;

  width: 100%;
  min-width: 13rem;
  height: 100%;
  min-height: 3.4rem;

  &.stripe-verified {
    border: 1px solid #d0dbff;
    color: #3c67ff;
  }

  &.stripe-failed {
    border: 1px solid #fee2e2;
    color: #ef4444;
  }

  &.admin-verified {
    border: 1px solid #dcfce7;
    color: #22c55e;
  }

  &.admin-failed {
    border: 1px solid #fee2e2;
    color: #ef4444;
  }

  &.stripe-processing {
    border: 1px solid #ffedd7;
    color: #ff8b00;
  }
`;
