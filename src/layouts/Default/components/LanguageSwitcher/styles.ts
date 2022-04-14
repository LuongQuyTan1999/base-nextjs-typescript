import styled from "styled-components";

export const LanguageSwitcher = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .language-switcher {
    width: 3.6rem;
    height: 7.4rem;
    background: #f5f5f5;
    border-radius: 8px;
    padding: 3px;
    user-select: none;
    color: ${({ theme }) => theme.primaryBlue};
    margin: 0rem 0rem 4rem 2rem;
    transition: all 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    .switcher-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      position: relative;

      & > div {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        height: 3.4rem;
        font-size: 1.3rem;
        padding: 0.5rem;
        z-index: 1;
        cursor: pointer;

        img {
          min-width: 2rem !important;
          z-index: 2;
        }

        .title {
          font-weight: 400;
          font-size: 1.6rem;
          line-height: 2.4rem;
          color: #a3a3a3;
          min-width: 5.4rem;
          opacity: 0;
          z-index: -1;
          pointer-events: none;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 0.2s;
        }

        &.active {
          border-radius: 6px;

          .title {
            color: ${({ theme }) => theme.mainText};
          }
        }
      }

      .switcher-slider {
        position: absolute;
        left: 0;
        top: 0;
        height: 50%;
        width: 100%;
        background: ${({ theme }) => theme.mainColor};
        z-index: 0;
        border-radius: 4px;
        transition: all cubic-bezier(0.645, 0.045, 0.155, 1) 0.3s;
      }
    }

    &.lang-fr {
      .switcher-slider {
        transform: translateY(100%);
      }
    }
  }
`;
