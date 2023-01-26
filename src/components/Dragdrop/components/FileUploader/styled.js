import styled from "styled-components";
import { COLORS } from "../../../../commons/colors";

export const InputFile = styled.input`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  font-size: 0;
  opacity: 0;
  cursor: pointer;
`;

export const TextFile = styled.span`
  color: ${(props) =>
    props.disabled ? COLORS.NEUTRALS_500 : COLORS.BLUE_BERRY_600};
  font-size: 16px;
  font-weight: 400;
  font-family: ''Lato', sans-serif';
`;

export const FileData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;