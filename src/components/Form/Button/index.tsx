import React from "react";
import _includes from "lodash/includes";
import * as S from "./styles";
import { LoadingButton } from "@/components/LoadingButton";

interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  form?: string;
  onClick?: () => void;
  style?: any;
}

export const Button = ({
  children,
  loading,
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  const outline = _includes(className, "outline");

  return (
    <S.Button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={disabled || loading ? `${className} disabled` : className}
      {...rest}
    >
      {loading ? <LoadingButton outline={outline} /> : children}
    </S.Button>
  );
};
