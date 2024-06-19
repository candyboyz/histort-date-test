import styled, { css } from "styled-components";

export type NavigationButtonStylesProps = {
  disabled?: boolean;
};

export const NavigationContainerStyles = styled.div`
  padding-left: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1040px) {
    gap: 10px;
    padding-left: 20px;
  }
`;

export const NavigationCounterStyles = styled.p`
  color: #42567a;
  font-weight: 400;
  line-height: 18.12px;

  @media (max-width: 1040px) {
    font-size: 14px;
  }
`;

export const NavigationButtonContainerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120px;

  @media (max-width: 1040px) {
    max-width: 60px;
  }
`;

export const NavigationButtonStyles = styled.button<NavigationButtonStylesProps>`
  border: 1px solid #42567a80;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 12px;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: white;
  }

  transition: all 0.2s ease-in-out;

  @media (max-width: 1040px) {
    padding: 2.5px;

    & svg {
      width: 18px;
      height: 18px;
    }
  }

  ${(props) =>
    props?.disabled &&
    css`
      opacity: 50%;
      background: transparent !important;
    `}
`;
