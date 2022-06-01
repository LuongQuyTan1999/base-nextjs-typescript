import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import * as S from "./styles";
import NotiIcon from "public/img/layout/noti";
import { LocalStorage } from "@/services/localStorage";
import { Popover, Image } from "@/components";

const Header = () => {
  const [toggle, setToggle] = useState("");
  const { t } = useTranslation("");
  const router = useRouter();
  const isActiveBackRouter = router.query?.["sub-router"];

  const handleBackRouter = () => {
    if (typeof window !== "undefined") {
      if (window.history.length > 1) {
        router.back();
      }
    }
  };

  return (
    <S.Header>
      <S.Left>
        {isActiveBackRouter && (
          <S.Back
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleBackRouter()}
          >
            <Image
              src="/img/layout/arrow-left.svg"
              alt="avatar"
              width="24"
              height="24"
            />
            {t("Back")}
          </S.Back>
        )}
        {t(LocalStorage.get("CURRENT_PAGE") || "Driver Management")}{" "}
        {router?.query?.id ? "[" + router?.query?.id + "]" : null}
      </S.Left>

      <S.Right id="user">
        <div id="user" className="cheat-popover" />

        <NotiIcon />

        <S.User onClick={() => setToggle("user")}>
          <div className="username">Sandra bibas</div>

          <div className="avatar">
            <Image
              src="/img/avatar-test.webp"
              alt="avatar"
              width="34"
              height="34"
            />
          </div>
        </S.User>

        <div className="arrow">
          <Image
            src="/img/layout/chevron-down.svg"
            alt="chevron-down"
            width="9"
            height="9"
          />
        </div>

        <Popover
          toggle={toggle === "user"}
          onToggle={() => setToggle("")}
          target="user"
        >
          <div className="logout">
            {t("Logout")}
            <Image
              src="/img/logout-icon.svg"
              alt="logout"
              width="20"
              height="20"
            />
          </div>
        </Popover>
      </S.Right>
    </S.Header>
  );
};

export default Header;
