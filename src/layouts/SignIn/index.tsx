import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";

import * as S from "./styles";

export type SignInLayoutProps = {
  children?: React.ReactNode;
};
export const SignInLayout = ({ children }: SignInLayoutProps) => {
  const { t } = useTranslation();

  return (
    <S.SignInLayout>
      <S.Left>
        <Image
          src="/img/layout/logo_original.png"
          alt="logo-white"
          width="270"
          height="70"
        />

        <div className="forge-ground">
          <Image
            src="/img/auth/foreground-signin.webp"
            alt="foreground-signin"
            width="545"
            height="500"
          />
        </div>
      </S.Left>

      <S.Right>
        <div className="right-wrapper">
          <div className="title">{t("Connection")}</div>
          {children}
        </div>
      </S.Right>
    </S.SignInLayout>
  );
};
