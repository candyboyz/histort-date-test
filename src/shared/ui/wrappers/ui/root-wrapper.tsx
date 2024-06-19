import React from "react";
import { MainWrapperStyles } from "./root-wrapper.styles";

export type MainWrapperProps = React.HTMLAttributes<HTMLElement> & {};

export const MainWrapper = ({ children, ...props }: MainWrapperProps) => {
  return <MainWrapperStyles {...props}>{children}</MainWrapperStyles>;
};
