import React from "react";

import * as S from "./styles";

interface MenuTabProps {
  title: string;
  onClick: () => void;
  active: boolean;
  className?: string;
}

export const MenuTab = ({
  title,
  active,
  className,
  ...rest
}: MenuTabProps) => {
  return (
    <S.MenuTab
      className={active ? "active" : className}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...rest}
    >
      {title}
    </S.MenuTab>
  );
};
