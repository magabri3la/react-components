import React from 'react';
import { DisclaimerWeb } from '../../../components/DisclaimerWeb';
import { DragAndDropZone, Lista, TextStyle } from "../styled";
import { COLORS } from '../../../commons/colors';
import { Dragdrop } from '../../../components/Dragdrop';

function UploadInvoice () {
  const [uploadedFiles, setUploadedFiles] = React.useState([]);

  return (
    <>
      <TextStyle
        color={COLORS.NEUTRALS_700}
        size="36"
        lineHeight="44"
        bold={900}
        letterSpacing="-0.2px"
        HiddenPaddingText
        paddingRight
        margin="0px 0px 12px 0px"
      >
        Carga las facturas
      </TextStyle>
      
      <TextStyle
        color={COLORS.NEUTRALS_700}
        size="16"
        lineHeight="28"
        letterSpacing="0.1px"
        bold={400}
        HiddenPaddingText
        paddingRight
      >
        Puedes cargar archivos en formato XML.
      </TextStyle>

      <DisclaimerWeb
        width="545px"
        padding="24px 36px 24px 24px"
        margin="40px 0px"
        background={"trasnparent"}
        renderInformation={() => (
          <>
            <TextStyle
              color={COLORS.NEUTRALS_700}
              size="16"
              lineHeight="24"
              letterSpacing="0.2px"
              bold={700}
              paddingRight={"0"}
              HiddenPaddingText
            >
              Ten en cuenta
            </TextStyle>
            <TextStyle
              color={COLORS.NEUTRALS_700}
              size="14"
              lineHeight="24"
              letterSpacing="0.1px"
              bold={400}
              paddingRight={"0"}
              HiddenPaddingText
            >
              <Lista>
                <li>
                  El nombre del archivo XML o PDF debe tener el siguiente formato: NºSERIE-NºDOCUMENTO <b>Ejemplo:</b> E581-4885877890
                </li>
                <li>
                  No olvides revisar los documentos e información ingresada para evitar retrocesos.
                </li>
                <li>
                  <b>
                    Si tu factura requiere adjuntar nota de crédito, lo podrás hacer en el paso dos (2). 
                  </b>
                </li>
              </Lista>
            </TextStyle>
          </>
        )}
      />

      <DragAndDropZone>
        <TextStyle
          color={COLORS.NEUTRALS_700}
          size="16"
          lineHeight="24"
          letterSpacing="0.2px"
          bold={700}
          HiddenPaddingText
          paddingRight
        >
          Archivos: {uploadedFiles.length}
        </TextStyle>
        <Dragdrop
          multiple={true}
          maxSizeAllowed={10}
          maxFilesAllowed={10}
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
          formats={['pdf', 'xml', 'sql']}
          disabled={uploadedFiles.length >= 10}
          messageMaxSizeFile="El archivo no cargó porque excede la capacidad máxima (10 MB)."
          messageMaxQuantityFiles="Has alcanzado el máximo de archivos permitidos. Para agregar uno nuevo, elimina alguno de los cargados."
        />
      </DragAndDropZone>
    </>
  )
}

export { UploadInvoice }