import React from "react";
import Lottie from "react-lottie";

import LoadingWhite from "./loading-button-white.json";
import Loading from "./loading-button.json";

export const LoadingButton = ({ width = 50, height = 44, outline = false }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: outline ? Loading : LoadingWhite,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} width={width} height={height} />;
};
