import styled from "styled-components";

export const IconBack = styled.img`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  cursor: pointer;
`;

export const ContainerBack = styled.div`
  display: flex;
  align-items: flex-start;
`;
