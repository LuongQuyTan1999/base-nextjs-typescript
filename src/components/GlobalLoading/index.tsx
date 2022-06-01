import React from "react";

import * as S from "./styles";
import { useAppSelector } from "@/hooks/useHook";
import { selectShowGlobalLoading } from "@/store/globalLoading/selector";
import { Image } from "@/components";

export const GlobalLoading = () => {
  const globalLoading = useAppSelector(selectShowGlobalLoading);

  if (!globalLoading) {
    return null;
  }

  return (
    <S.GlobalLoading>
      <S.WrapperImage>
        <Image
          src="/img/global-loading.gif"
          alt="loading..."
          width="200"
          height="200"
        />
        <Image
          src="/img/logo-loading.webp"
          alt="loading..."
          width="182"
          height="43"
        />
      </S.WrapperImage>
    </S.GlobalLoading>
  );
};
