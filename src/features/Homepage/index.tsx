import React, { FC } from "react";

import { useTranslation } from "next-i18next";
import { DefaultLayout } from "@/layouts";

export const Homepage: FC = () => {
  const { t } = useTranslation("");

  return <DefaultLayout>{t("description")}</DefaultLayout>;
};
