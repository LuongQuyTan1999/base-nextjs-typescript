import React from "react";
import { useTranslation } from "next-i18next";

import * as S from "./styles";

interface JobTitleProps {
  title: string;
  status: string;
}

export const JobTitle = ({ title, status }: JobTitleProps) => {
  const { t } = useTranslation("");

  return <S.JobTitle className={status}>{t(title)}</S.JobTitle>;
};
