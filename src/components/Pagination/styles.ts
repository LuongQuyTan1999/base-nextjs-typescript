import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
`;

export const Left = styled.div`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: #a3a3a3;
`;

export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.4rem;

  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #a3a3a3;

  .custom-select {
    .select__control {
      border: 1px solid #e5e5e5;
      border-radius: 8px;

      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.2rem;
      color: #171717;

      .select__indicator-separator {
        display: none;
      }

      .select__indicator {
        svg path {
          fill: #ff8b00;
        }
      }
    }
  }

  .arrow-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    .active {
      svg path {
        stroke: #ff8b00;
      }
    }

    .arrow {
      display: flex;
      cursor: pointer;
    }
  }
`;
