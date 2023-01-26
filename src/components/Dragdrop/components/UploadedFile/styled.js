import styled from "styled-components";
import { COLORS } from "../../../../commons/colors";

export const CardDocument = styled.div`
  background-color: ${COLORS.NEUTRALS_200};
  border-radius: 16px;
  margin: 20px 0px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  width: 545px;

  div:first-child {
    display: flex;
    align-items: center;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

export const FileData = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Progress = styled.div`
  height: 4px;
  border-radius: 8px;
  background: ${COLORS.RED};
  width: ${(props) => (props.progress ? `${props.progress}%` : "100%")};
  transition: width 1s ease;
`;