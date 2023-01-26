import React, { useRef } from 'react';
import {
  FileData,
  InputFile,
  TextFile,
} from "./styled";
import { TextStyle } from '../../../../commons/styled';
import { COLORS } from "../../../../commons/colors";
import { useUploadFile } from '../../hooks/useUploadFile';

function FileUploader ({
  formats,
  maxSizeAllowed,
  maxFilesAllowed,
  onUpload,
  multiple,
  files,
  disabled,
  icon,
  iconDisabled,
}) {

  const { uploadForm, isSuccess, progress } = 
  useUploadFile('https://run.mocky.io/v3/bbe46e46-f0b1-4ec3-82f2-8192979692af');

  function getFormatsAllowed (formats) {
    return formats.map((format) => `.${format}`).toString()
  }; 

  function validateMaximumFileSize (file) {
    let maximum = maxSizeAllowed * 1024 * 1024;
    return file.size < maximum;
  };

  function validateNoRepeatedFiles (arrayFiles, file) {
    return arrayFiles.findIndex((f) => f.name === file.name) === -1;
  }

  function onUploadFiles (newFilesSelected) {
    onUpload((prevFiles) => {
      if(newFilesSelected.length >= maxFilesAllowed) return prevFiles;
      return [...newFilesSelected]
    })
  };

  async function handleUploadFiles (event) {
    event.preventDefault();
    event.stopPropagation();
    
    const chosenFiles = [...chosenFilesRef.current.files];
    const uploadedFiles =[...files];
    
    if (chosenFiles.length > maxFilesAllowed) return;

    chosenFiles.some(async (file) => {

      if (validateMaximumFileSize(file) && validateNoRepeatedFiles(uploadedFiles, file)) {
    
          let data = new FormData();
          data.append('file', file)

          const resp = await uploadForm(data);
          console.log('desde uploader', resp);

          if(resp?.status === 200) {
            console.log(200)
            uploadedFiles.push(file)
          }
          else {
            console.log('kha')
        }
      }
      else {
        console.log(`${file.name} is too large, please pick a smaller file`)
      }
    });
    console.log(uploadedFiles);

    onUploadFiles(uploadedFiles);
  };

  const chosenFilesRef = useRef();

  return (
    <>
        <FileData>
          {disabled ? <img src={iconDisabled} /> : <img src={icon} />}
          <TextStyle
            color={disabled ? COLORS.NEUTRALS_500 : COLORS.NEUTRALS_700}
            size="16"
            bold={400}
            paddingBottom={"8px"}
            HiddenPaddingText
            paddingRight
            margin={"0px 0px 8px 0px"}
          >
            Arrastre el archivo a esta área o{" "}
            <TextFile 
              disabled={disabled}>
              haz click aquí
            </TextFile>
          </TextStyle>
          <TextStyle
            color={disabled ? COLORS.NEUTRALS_500 : COLORS.NEUTRALS_700}
            size="12"
            bold={400}
            HiddenPaddingText
            paddingRight
          >
            Máximo 10 MB
          </TextStyle>
        </FileData>

        <InputFile
          type="file"
          multiple={multiple}
          accept={getFormatsAllowed(formats)}
          onChange={(event)=> handleUploadFiles(event)}
          ref={chosenFilesRef}
          // onChange={onChangeFile}
          // onDrop={() => setIsOver(false)}
          // onDragEnter={() => setIsOver(true)}
          // onDragLeave={() => setIsOver(false)}
          // accept={typeFile}
          // value=""
          // disabled={disabled}
        />
    </>
  )
}

export { FileUploader };