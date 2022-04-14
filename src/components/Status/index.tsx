import React from "react";

import * as S from "./styles";

interface StatusProps {
  title: string;
  status: string;
}

export const Status = ({ title, status }: StatusProps) => {
  return <S.Status className={status}>{title}</S.Status>;
};
