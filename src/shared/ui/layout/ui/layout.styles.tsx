import styled, { css } from "styled-components";

export type LayoutLineStylesProps = {
  direction?: "vertical" | "horizontal";
};

const stylesVariant = {
  vertical: css`
    height: 100%;
    width: 1px;
    top: 0;
    left: 50%;
  `,
  horizontal: css`
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
  `,
};

export const LayoutLineStyles = styled.div<LayoutLineStylesProps>`
  position: absolute;
  background: #42567a20;
  z-index: -1;

  @media (max-width: 1040px) {
    display: none;
  }

  ${(props) => props.direction && stylesVariant[props.direction]}
`;

export const LayoutCircleStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #42567a20;
  width: 530px;
  height: 530px;
  border-radius: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1040px) {
    display: none;
  }
`;
