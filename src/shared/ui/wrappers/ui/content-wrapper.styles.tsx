import styled from "styled-components";

export const ContentWrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 150px 0 30px 0;
  height: 100%;

  @media (max-width: 1040px) {
    padding-top: 56px;
  }
`;
