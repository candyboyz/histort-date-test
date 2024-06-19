import styled from "styled-components";

export const HeaderWrapperStyles = styled.div`
  border-left: 5px;
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  border-style: solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, #3877ee, #ef5da8);
  max-width: 400px;
  padding-left: 80px;
  height: fit-content;

  @media (max-width: 1040px) {
    border: none;
    max-width: 140px;
    padding-left: 20px;
  }
`;

export const HeaderTitleStyles = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 67.2px;
  color: #42567a;

  @media (max-width: 1040px) {
    font-size: 20px;
    line-height: 24px;
  }
`;
