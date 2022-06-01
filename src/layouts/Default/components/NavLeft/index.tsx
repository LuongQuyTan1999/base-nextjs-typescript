import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import _includes from "lodash/includes";

import * as S from "./styles";
import { MenuData } from "../../data";
import LanguageSwitcher from "../LanguageSwitcher";
import { LocalStorage } from "@/services/localStorage";
import { Image } from "@/components";

const NavLeft = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("");

  const isActive = (href: string, subHref?: string[]) => {
    return router.pathname === href || _includes(subHref, router.pathname);
  };

  return (
    <S.NavLeft className={isOpen ? "open" : ""}>
      <S.Logo className="logo" onClick={() => router.push("/")}>
        {isOpen ? (
          <Image src="/img/oov-logo-open.svg" alt="oov-logo" layout="fill" />
        ) : (
          <Image src="/img/oov-logo.svg" alt="oov-logo" layout="fill" />
        )}
      </S.Logo>

      <S.Nav>
        <ul>
          {MenuData.map((item, idx) => (
            <li
              className={isActive(item.href, item?.subHref) ? "active" : ""}
              key={idx}
            >
              <Link href={item.href} passHref>
                <a onClick={() => LocalStorage.set(item.title, "CURRENT_PAGE")}>
                  <div className="icon">
                    <item.icon />
                  </div>{" "}
                  <div className="title">{t(item.title)}</div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </S.Nav>

      <S.Language className="language-switcher">
        <LanguageSwitcher />
      </S.Language>

      <S.Arrow
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="arrow"
      >
        <Image src="/img/layout/arrow.svg" alt="arrow" layout="fill" />
      </S.Arrow>
    </S.NavLeft>
  );
};

export default NavLeft;
