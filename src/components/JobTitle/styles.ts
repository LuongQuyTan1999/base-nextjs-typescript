import styled from "styled-components";

export const JobTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  text-align: center;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 0rem 1.2rem;

  min-width: 14rem;
  height: 100%;
  min-height: 3.4rem;

  &.entreprise {
    background: #ffedd7;
    color: #ff8b00;
  }

  &.auto-entreprise {
    background: #fee2e2;
    color: #ef4444;
  }

  &.validated-race {
    background: #dcfce7;
    color: #22c55e;
  }

  &.race-in-dispute {
    background: #fee2e2;
    color: #ef4444;
  }

  &.new {
    background: #fee2e2;
    color: #ef4444;
  }

  &.accepted {
    background: #fff6d7;
    color: #ffb800;
  }

  &.canceled {
    background: #e5e5e5;
    color: #737373;
  }

  &.authorized {
    background: #dcfce7;
    color: #22c55e;
  }

  &.check_in {
    background: #d0dbff;
    color: #3c67ff;
  }

  &.on_road {
    background: #aee2fa;
    color: #00a3ff;
  }

  &.checkout {
    background: #e5cef0;
    color: #a85fd5;
  }

  &.done {
    background: #ffedd7;
    color: #ff8b00;
  }

  &.pending {
    background: #ffedd7;
    color: #ff8b00;
  }
`;
