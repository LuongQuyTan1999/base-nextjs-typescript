import NextImage, { ImageProps } from "next/image";
import React, { useState } from "react";

export type Props = {
  isNext?: boolean;
} & ImageProps;

export const Image = (props: Props) => {
  const { src, ...restProps } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <NextImage
      {...restProps}
      src={imgSrc}
      onError={() => {
        setImgSrc("/img/avatar-test.webp");
      }}
    ></NextImage>
  );
};
