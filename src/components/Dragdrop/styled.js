import styled from "styled-components";
import { COLORS } from "../../commons/colors";

export const ContainerDropzone = styled.div`
  width: ${(props) => props.width || "545px"};
  // height: ${(props) => props.height || "192px"};
  border: 2px dashed ${COLORS.NEUTRALS_800};
  border-radius: 20px;
  margin: ${(props) => props.margin || "unset"};
  padding: ${(props) => props.padding || "unset"};
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.disabled
      ? COLORS.NEUTRALS_200
      : props.isOver
      ? COLORS.GREY_8
      : COLORS.WHITE};
  transition: background 0.5s ease-in-out;
  &:hover,
  &:visited,
  &:focus {
    background: ${COLORS.GREY_8};
  }

  img {
    width: ${(props) => props.widthIcon || "auto"};
    height: ${(props) => props.heightIcon || "auto"};
    margin-bottom: 16px;
  }
`;

export const ContainerMessageError = styled.div`
  display: flex;
  align-items: flex-start;
  width: 480px;
  margin-top: -15px;
  img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
`;

export const Errors = styled.div`
`;
