import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";

import * as S from "./styles";

export type SignUpLayoutProps = {
  children?: React.ReactNode;
};
export const SignUpLayout = ({ children }: SignUpLayoutProps) => {
  const { t } = useTranslation();

  return (
    <S.SignUpLayout>
      <S.Left>
        <Image
          src="/img/layout/logo_original.png"
          alt="logo-primary"
          width="295"
          height="70"
        />

        <div className="forge-ground">
          <Image
            src="/img/auth/foreground-signup.svg"
            alt="foreground-signup"
            layout="fill"
          />
        </div>
      </S.Left>

      <S.Right>
        <div className="right-wrapper">
          <div className="title">{t("Inscription")}</div>
          <div className="description">
            {t("Choose your profile to start using the application")}
          </div>
          {children}
        </div>
      </S.Right>
    </S.SignUpLayout>
  );
};
