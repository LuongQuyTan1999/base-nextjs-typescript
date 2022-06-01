import React from "react";

import * as S from "./styles";
import { Image } from "@/components";

export const Empty = () => {
  return (
    <S.Empty>
      <div>
        <Image src="/img/empty.webp" layout="fill" alt="Empty" />
      </div>
    </S.Empty>
  );
};
