import styled from "styled-components";

export const DatePicker = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;

  &.horizontal {
    flex-direction: row;
    align-items: center;

    & > label {
      min-width: 4rem;
      text-align: right;
    }
  }

  label,
  div {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #a3a3a3;
  }

  & > div {
    width: 100%;
  }

  .react-datepicker-wrapper {
    .react-datepicker__input-container {
      position: relative;

      input {
        background: #fafafa;
        border: 1px solid #e5e5e5;
        border-radius: 10px;
        width: 100%;
        height: 4rem;
        padding: 0.8rem 1.8rem;
      }

      &:after {
        content: "";
        background: url(/img/arrow.svg) no-repeat center;
        background-size: cover;
        display: block;
        position: absolute;
        top: 50%;
        right: 1.8rem;
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg) translateX(-50%);
        width: 1.6rem;
        height: 1.9rem;
      }
    }
  }

  &.is-value {
    .react-datepicker-wrapper {
      .react-datepicker__input-container {
        &:after {
          display: none;
        }

        button {
          &:after {
            background-color: #ff8b00;
          }
        }
      }
    }
  }

  .react-datepicker__tab-loop .react-datepicker-popper {
    z-index: 999999999;
    .react-datepicker {
      border: none;
      background: #ffffff;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      padding: 1.2rem 1.6rem;
    }

    .react-datepicker .react-datepicker__triangle {
      &:after,
      &:before {
        display: none;
      }
    }

    .react-datepicker__month-container {
      width: 100%;

      .react-datepicker__header {
        background: #ffffff;
        border-bottom: none;

        .custom-header {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .custom-arrow {
            background: none;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;

            &.prev {
              transform: rotate(180deg);
            }
          }

          .current-date {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            div {
              font-weight: 700;
              font-size: 1.6rem;
              line-height: 2.4rem;
              color: #ff8b00;
              text-transform: capitalize;
            }
          }
        }

        .react-datepicker__day-names {
          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 1.5rem 0rem;

          .react-datepicker__day-name {
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 2.2rem;
            color: #a3a3a3;
            min-width: 4rem;
            text-transform: capitalize;
          }
        }
      }

      .react-datepicker__month {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .react-datepicker__week {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;

          & > div {
            display: flex;
            justify-content: center;
            align-items: center;

            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.2rem;
            color: #171717;
            min-width: 4rem;
            height: 4rem;
          }

          & > div:hover {
            background: #ff8b00;
            border-radius: 50%;
            color: #ffffff;
          }

          .react-datepicker__day--keyboard-selected,
          .react-datepicker__day--selected {
            background: #ff8b00;
            border-radius: 50%;
            color: #ffffff;
          }
        }
      }
    }
  }

  .text-error {
    color: red;
  }
`;
