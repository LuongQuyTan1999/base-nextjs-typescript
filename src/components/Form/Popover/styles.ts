import styled from "styled-components";
import { Popover } from "reactstrap";

export const PopoverWrapper = styled(Popover)`
  .popover {
    background: #ffffff;
    box-shadow: 0px 20px 50px rgba(23, 23, 23, 0.25);
    border-radius: 10px;
    border: none;
    padding: 1.4rem 2rem;

    width: 100%;
    min-width: 25.2rem;
    max-height: 42rem;
    overflow: auto;

    .popover-body {
      padding: 0;

      display: flex;
      flex-direction: column;
      gap: 2.5rem;

      a,
      div {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: #171717;
      }

      .logout {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        color: #ef4444;
      }
    }

    .arrow {
      &::before,
      &::after {
        /* border: n */
      }
    }
  }
`;
