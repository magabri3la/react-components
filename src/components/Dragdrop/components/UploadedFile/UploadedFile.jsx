import React from 'react'
import { CardDocument, FileData, Progress } from './styled';
import IconDocument from '../../../../assets/icon_document.svg'
import { COLORS } from '../../../../commons/colors';
import { TextStyle } from '../../../../commons/styled';

function UploadedFile ({
  index, 
  item, 
  modalDeleteFile, 
  setFileDelete, 
  setModalDeleteFile,
  uploaded,
  progress
}) {
  const size = (Math.floor(item.size) / 1000).toFixed(2) + ' KB';
  return (
    <CardDocument key={index}>
      {!uploaded && (
        <>
        <FileData style={{ width: "100%"}}>
          <div style={{width: '100%', display: "flex", justifyContent: "space-between"}}>
            <TextStyle 
                color={COLORS.NEUTRALS_700} 
                size="14" 
                bold={400}
                margin={"0px 0px 8px 0px"}
                HiddenPaddingText
                paddingRight
                >
                Cargando...
            </TextStyle>
            <TextStyle
                color={COLORS.BLUE_BERRY_600}
                size="14"
                lineHeight="16"
                letterSpacing="0.4px"
                bold={700}
                margin={"0px 0px 8px 0px"}
                cursor="pointer"
                HiddenPaddingText
                paddingRight
                onClick={() => {
                  setFileDelete(item.key);
                  setModalDeleteFile(!modalDeleteFile);
                }}
              >
                Cancelar
            </TextStyle>
          </div>
          <Progress/>
          <div style={{ width: "100%"}}>
            <TextStyle 
                color={COLORS.NEUTRALS_700} 
                size="14" 
                bold={400}
                TextTransform={'UpperCase'}
                margin={"4px 0px 0px 0px"}
                HiddenPaddingText
                paddingRight
                >
                {100}% - {item.name} 
            </TextStyle>
          </div>
        </FileData>
        </>
      )}
      {uploaded && (
        <>
          <div style={{ display: "flex", alignItems: "flex-start"}}>
            <img src={IconDocument} />
            <FileData>
              <TextStyle 
                color={COLORS.NEUTRALS_700} 
                size="14" 
                bold={700}
                TextTransform={'UpperCase'}
                margin={"0px 0px 4px 0px"}
                HiddenPaddingText
                paddingRight
                >
                {item.name}
              </TextStyle>
              <TextStyle 
              color={COLORS.NEUTRALS_600} 
              size="14" 
              bold={400} 
              HiddenPaddingText 
              paddingRight>
                {size}
              </TextStyle>
            </FileData>
          </div>
          <div>
            <TextStyle
              color={COLORS.BLUE_BERRY_600}
              size="14"
              lineHeight="16"
              letterSpacing="0.4px"
              bold={700}
              cursor="pointer"
              onClick={() => {
                setFileDelete(item.key);
                setModalDeleteFile(!modalDeleteFile);
              }}
            >
              Eliminar
            </TextStyle>
          </div>
        </>
      )}
    </CardDocument>
  )
}

export { UploadedFile };