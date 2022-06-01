import styled from "styled-components";

export const NavLeft = styled.div`
  position: sticky;
  top: 0px;
  z-index: 999;

  display: flex;
  flex-direction: column;

  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 10.8rem;
  height: 100vh;

  background: ${({ theme }) => theme.mainColor};
  box-shadow: 10px 0px 20px rgba(115, 115, 115, 0.05);

  padding: 2.4rem 3.4rem;

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

    .arrow {
      transform: rotate(180deg);
    }

    .logo {
      width: 13.8rem;
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

export const Logo = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
`;

export const Nav = styled.nav`
  margin-top: 8rem;
  margin-left: 0.9rem;

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
          color: #a3a3a3;
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
          fill: ${({ theme }) => theme.projectColor};
          stroke: ${({ theme }) => theme.projectColor};
        }

        &:hover .title {
          color: ${({ theme }) => theme.projectColor};
        }
      }
    }

    .active {
      border-radius: 8px 0px 0px 8px;

      a {
        color: ${({ theme }) => theme.projectColor};
      }

      a svg path {
        fill: ${({ theme }) => theme.projectColor};
        stroke: ${({ theme }) => theme.projectColor};
      }

      .title {
        color: ${({ theme }) => theme.projectColor};
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

  transform: rotate(0deg);
  cursor: pointer;
  transition: all 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
