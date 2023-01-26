import React from 'react';
import { ContainerCard, Icon, Information } from "./styled";
import IconInfo from "../../assets/icon_info.svg";

function DisclaimerWeb ({
  renderInformation,
  width,
  margin,
  background,
  padding,
  height,
}) {
  return (
    <ContainerCard
      width={width}
      margin={margin}
      background={background}
      padding={padding}
      height={height}
    >
      <Icon src={IconInfo} alt="icon_info" />
      <Information>{renderInformation()}</Information>
    </ContainerCard>
  )
}

export { DisclaimerWeb };