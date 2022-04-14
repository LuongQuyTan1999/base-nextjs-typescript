import styled from "styled-components";

export const NavLeft = styled.div`
  position: sticky;
  top: 0px;
  z-index: 999;

  display: flex;
  flex-direction: column;

  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 7.5rem;

  height: 100vh;

  background: ${({ theme }) => theme.mainColor};
  box-shadow: 10px 0px 20px rgba(115, 115, 115, 0.05);

  &.open {
    position: fixed;
    width: 27.6rem;

    a {
      justify-content: flex-start;
      .title {
        opacity: 1;
        z-index: 1;
        pointer-events: auto;
      }
    }

    .user-information {
      .avatar {
        width: 7rem;
        height: 7rem;
      }

      .information {
        display: flex;
      }
    }

    .arrow {
      transform: rotate(180deg);
    }

    .language-switcher {
      width: 10.6rem;
      .switcher-wrapper {
        .title {
          opacity: 1;
          z-index: 1;
          pointer-events: auto;
        }
      }
    }
  }
`;

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2.5rem 0rem;

  .avatar {
    position: relative;
    min-width: 5rem;
    min-height: 5rem;
    margin-bottom: 1rem;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.2s;

    img {
      border-radius: 50%;
    }
  }

  .information {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.2s;

    .username {
      font-weight: 700;
      font-size: 2rem;
      line-height: 3rem;
      color: ${({ theme }) => theme.mainText};
    }

    .email {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.2rem;
      color: #6a7ba7;
      margin-bottom: 1rem;
    }

    .role {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      width: 100%;
      max-width: 9.2rem;
      height: 3rem;
      padding: 3px;

      background: #0e2667;
      border-radius: 42px;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 2.2rem;
      color: #ffffff;
    }
  }
`;

export const Nav = styled.nav`
  margin-top: 8rem;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 4rem;

    li {
      width: 100%;
      text-align: center;
      position: relative;
      display: flex;
      padding: 0px 2.5rem;

      &:after {
        content: "";
        display: none;
        width: 4px;
        height: 4.4rem;
        background-color: ${({ theme }) => theme.primaryBlue};
        position: absolute;
        left: 0;
        border-radius: 0px 8px 8px 0px;
        transform: translateY(-12px);
      }

      &:hover:after {
        display: inline-block;
      }

      a {
        display: flex;
        gap: 1.2rem;

        width: 100%;
        height: 2.4rem;

        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.mainText};
        .icon {
          width: 2.2rem;
          height: 2.2rem;
        }

        .title {
          font-weight: 400;
          font-size: 1.6rem;
          line-height: 2.4rem;
          color: ${({ theme }) => theme.mainText};
          min-width: 200px;

          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 0.2s;
          text-align: left;
          width: 100%;
          opacity: 0;
          z-index: -1;
          pointer-events: none;
        }

        &:hover svg path {
          fill: ${({ theme }) => theme.primaryBlue};
          stroke: ${({ theme }) => theme.primaryBlue};
        }

        &:hover .title {
          color: ${({ theme }) => theme.primaryBlue};
        }
      }
    }

    .active {
      border-radius: 8px 0px 0px 8px;

      &:after {
        display: inline-block;
      }

      a {
        color: ${({ theme }) => theme.primaryBlue};
      }

      a svg path {
        fill: ${({ theme }) => theme.primaryBlue};
        stroke: ${({ theme }) => theme.primaryBlue};
      }

      .title {
        color: ${({ theme }) => theme.primaryBlue};
      }
    }
  }
`;

export const Language = styled.div`
  display: flex;
  flex: 1;

  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Arrow = styled.div`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  margin: 0rem 0rem 1.2rem 2.5rem;

  transform: rotate(0deg);
  cursor: pointer;
  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
