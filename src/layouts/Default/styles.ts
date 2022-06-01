import styled from "styled-components";

export const DefaultLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 17fr;
  grid-template-rows: 88px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const Header = styled.header`
  grid-area: 1 / 2 / 2 / 3;
  padding: 2.4rem;
`;

export const NavLeft = styled.div`
  grid-area: 1 / 1 / 3 / 2;
`;

export const Main = styled.main`
  grid-area: 2 / 2 / 3 / 3;
  padding: 1rem 2.4rem 2.4rem 2.4rem;
  overflow-y: hidden;

  display: flex;
  flex-direction: column;
`;
