import React from "react";
import { useRouter } from "next/router";

import * as S from "./styles";
import { Image } from "@/components";

const LanguageSwitcher = () => {
  const { locale, asPath } = useRouter();
  const router = useRouter();

  return (
    <S.LanguageSwitcher>
      <div className={`language-switcher lang-${locale}`}>
        <div className="switcher-wrapper">
          <div
            className={locale === "en" ? "active" : ""}
            onClick={() => {
              router.push(asPath, undefined, { locale: "en" });
            }}
          >
            <div className="flag">
              <Image
                src="/img/layout/eng-logo.svg"
                alt="fr-logo"
                width="20"
                height="20"
              />
            </div>
            <div className="title">English</div>
          </div>
          <div
            className={locale === "fr" ? "active" : ""}
            onClick={() => {
              router.push(asPath, undefined, { locale: "fr" });
            }}
          >
            <div className="flag">
              <Image
                src="/img/layout/fr-logo.svg"
                alt="en-logo"
                width="20"
                height="20"
              />
            </div>
            <div className="title">French</div>
          </div>
          <div className="switcher-slider" />
        </div>
      </div>
    </S.LanguageSwitcher>
  );
};

export default LanguageSwitcher;
