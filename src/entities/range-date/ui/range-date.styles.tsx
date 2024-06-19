import React from "react";
import styled, { css } from "styled-components";

export type DateTextStylesProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: "min" | "max";
};

export const RangeDateContainerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  height: 200px;

  @media (max-width: 1040px) {
    gap: 20px;
  }
`;

const dateTextVariants = {
  min: css`
    color: #3877ee;
  `,
  max: css`
    color: #ef5da8;
  `,
};

export const DateTextStyles = styled.p<DateTextStylesProps>`
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  letter-spacing: -2%;
  text-align: center;

  @media (max-width: 1040px) {
    font-size: 56px;
    line-height: 72.46px;
  }

  ${(props) => props?.variant && dateTextVariants[props.variant]}
`;
