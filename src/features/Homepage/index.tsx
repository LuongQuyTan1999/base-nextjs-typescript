import React, { FC } from "react";

import { useTranslation } from "next-i18next";

export const Homepage: FC = () => {
  const { t } = useTranslation("");

  return (
    <footer>
      <p>{t("description")}</p>
    </footer>
  );
};
