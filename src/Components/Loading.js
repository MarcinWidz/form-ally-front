import React from "react";

import animationData from "../assets/loading.json";

import Lottie from "react-lottie";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default Loading;
