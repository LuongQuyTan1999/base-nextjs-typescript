import Link from "next/link";
import React from "react";

import * as S from "./styles";
import { Image } from "@/components";

export const Custom404 = () => {
  return (
    <S.Page404>
      <S.WrapperContent>
        <S.Left>
          <div className="wrapper-img">
            <Image src="/img/bg-404-image.webp" alt="404-image" layout="fill" />
          </div>
        </S.Left>

        <S.Right>
          <div className="right-title">Oups...</div>
          <div className="right-label">
            La page que vous recherchez semble introuvable.
          </div>
          <div className="right-code">Code d’erreur : 404.</div>
          <div className="right-label">
            Voici quelques liens utiles à la place :
          </div>
          <div className="right-link">
            <Link href="https://livmeds.com/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Page d’accueil
              </a>
            </Link>
          </div>
          <div className="right-link">
            Pharmacien ?{" "}
            <Link href="https://app.livmeds.com/login" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Connectez-vous
              </a>
            </Link>
          </div>
          <div className="right-link">
            Vous souhaitez vous faire livrer ?{" "}
            <Link href="https://app.livmeds.com/login" passHref>
              <a target="_blank" rel="noopener noreferrer">
                Connectez-vous
              </a>
            </Link>
          </div>
        </S.Right>
      </S.WrapperContent>
    </S.Page404>
  );
};
