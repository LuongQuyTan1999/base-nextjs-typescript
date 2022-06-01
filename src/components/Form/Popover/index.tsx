import React from "react";
import { PopoverBody } from "reactstrap";

import * as S from "./styles";

interface PopoverProps {
  toggle: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  placement?: string;
  target: string;
  className?: string;
  size?: string;
}

export const Popover = ({
  toggle,
  onToggle,
  children,
  placement = "bottom",
  target,
  className,
  size = "small",
  ...rest
}: PopoverProps) => {
  return (
    <S.PopoverWrapper
      target={target}
      isOpen={toggle}
      toggle={onToggle}
      placement={placement}
      trigger="legacy"
      className={className}
      size={size}
      {...rest}
    >
      <PopoverBody>{children}</PopoverBody>
    </S.PopoverWrapper>
  );
};
