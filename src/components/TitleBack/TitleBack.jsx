import React from 'react'
import { ContainerBack, IconBack } from "./styled";

function TitleBack ({ renderTitle, icon, widthIcon, heightIcon, history }) {
  return (
    <ContainerBack>
      <IconBack
        src={icon}
        alt="back"
        width={widthIcon}
        height={heightIcon}
        onClick={() => {
          history.goBack();
        }}
      />
      {renderTitle()}
    </ContainerBack>
  )
}

export { TitleBack };
