import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import * as S from "./styles";
import { Button } from "@/components";

const Header = () => {
  const router = useRouter();

  return (
    <S.Header>
      <S.Left onClick={() => router.push("/")}>
        <Image
          src="/img/layout/logo_original.png"
          alt="avatar"
          width="165"
          height="36"
        />
      </S.Left>

      <S.Right id="user">
        {/* <div id="user" className="cheat-popover" /> */}
        <div className="address">
          <Image
            src="/img/layout/address.svg"
            alt="address"
            width="20"
            height="20"
          />
          <strong>[You]</strong> 267 rue de napoléon, 20000 Corte, France
        </div>

        <Button className="custom-button">
          <Image src="/img/layout/cart.svg" alt="cart" width="24" height="24" />
          Panier
        </Button>
      </S.Right>
    </S.Header>
  );
};

export default Header;
