import React from "react";
import { LayoutCircleStyles, LayoutLineStyles } from "./layout.styles";

export const Layout = () => {
  return (
    <>
      <LayoutLineStyles direction="vertical" />
      <LayoutLineStyles direction="horizontal" />
      <LayoutCircleStyles />
    </>
  );
};
