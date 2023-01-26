import styled from "styled-components";

export const TextStyle = styled.div`
  color: ${(props) => (props.color ? props.color : COLORS.TEXT)};
  font-family: ${(props) => (props.typeFont ? `'${props.typeFont}'` : "'Lato'")},
    sans-serif !important;
  font-size: ${(props) => (props.size ? `${props.size}px` : "24px")};
  font-stretch: normal;
  font-style: normal;
  font-weight: ${(props) => props.bold};
  letter-spacing: ${(props) =>
    props.letterSpacing ? `${props.letterSpacing}px` : "normal"};
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}px` : "none"};
  margin: ${(props) => props.margin || "0 !important"};
  padding-bottom: ${(props) => (!props.HiddenPaddingText ? "9px" : "none")};
  padding-top: ${(props) => (!props.HiddenPaddingText ? "9px" : "none")};
  padding-right: ${(props) => (!props.paddingRight ? "4px" : "none")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "start")};
  display: ${(props) => (!props.display ? "block" : "inline-flex")};
  align-items: ${(props) => (!props.display ? "none" : "center")};
  min-height: ${(props) => props.minHeight && props.minHeight};
  letter-spacing: ${(props) => props.letterSpacing && props.letterSpacing};
  width: ${(props) => props.width || "auto"};
  cursor: ${(props) => props.cursor || "auto"};
  text-transform: ${(props) => props.TextTransform || "none"};
`;
