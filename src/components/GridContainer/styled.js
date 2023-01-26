import styled from "styled-components";

export const Grid = styled.div`
  width: 84% !important;
  max-width: 480px;
  min-width: 296px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 100% !important;
    max-width: 592px;
  }

  @media (min-width: 1024px) {
    max-width: 925px;
  }

  @media (min-width: 1200px) {
    max-width: 1184px;
  }
`;