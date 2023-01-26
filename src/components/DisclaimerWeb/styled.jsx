import { COLORS } from "../../commons/colors";
import styled from "styled-components";

export const Information = styled.div`
  margin-left: 12px;
  margin-top: 4px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 26px;
`;

export const ContainerCard = styled.div`
  background: ${(props) => props.background || COLORS.NEUTRALS_200};
  border-radius: 20px;
  border: 3px solid ${COLORS.NEUTRALS_800};
  padding: ${(props) => props.padding || "unset"};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "unset"};
  height: ${(props) => props.height || "100%"};
`;
