import Header from "./components/Header";
import NavLeft from "./components/NavLeft";
import * as S from "./styles";

export type Props = {
  children?: React.ReactNode;
};

export const DefaultLayout = ({ children }: Props) => {
  return (
    <S.DefaultLayout>
      <S.NavLeft>
        <NavLeft />
      </S.NavLeft>

      <S.Header>
        <Header />
      </S.Header>

      <S.Main>{children}</S.Main>
    </S.DefaultLayout>
  );
};
