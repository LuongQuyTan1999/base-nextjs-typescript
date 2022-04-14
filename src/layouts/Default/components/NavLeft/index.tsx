import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import _includes from "lodash/includes";

import * as S from "./styles";
import { MenuData } from "../../data";
import LanguageSwitcher from "../LanguageSwitcher";
import { LocalStorage } from "@/services/localStorage";

const NavLeft = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("");

  const isActive = (href: string, subHref?: string[]) => {
    return router.pathname === href || _includes(subHref, router.pathname);
  };

  return (
    <S.NavLeft className={isOpen ? "open" : ""}>
      <S.UserInformation className="user-information">
        <div className="avatar">
          <Image
            src="/img/default-avatar.svg"
            alt="default-avatar"
            layout="fill"
          />
        </div>

        <div className="information">
          <div className="username">Leslie Alexander</div>
          <div className="email">leslie.alex@gmail.com</div>
          <div className="role">
            <Image
              src="/img/layout/role-client.svg"
              alt="default-avatar"
              width="24"
              height="24"
            />
            Client
          </div>
        </div>
      </S.UserInformation>

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
