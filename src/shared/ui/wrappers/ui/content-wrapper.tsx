import React from "react";
import { ContentWrapperStyles } from "./content-wrapper.styles";

type WrapperProps = React.HTMLAttributes<HTMLDivElement> & {};

export const ContentWrapper = ({ children, ...props }: WrapperProps) => {
  return <ContentWrapperStyles {...props}>{children}</ContentWrapperStyles>;
};
