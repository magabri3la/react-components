import React, { useState, useRef } from 'react';
import {
  FileData,
  InputFile,
  TextFile,
} from "./styled";
import { TextStyle } from '../../../../commons/styled';
import { COLORS } from "../../../../commons/colors";
import { useUploadFile } from '../../hooks/useUploadFile';
import IconUploadFile from '../../../../assets/icon_upload_file.svg';
import IconUploadDisabled from '../../../../assets/icon_upload_file.svg';

function FileUploader ({
  formats,
  maxSizeAllowed,
  maxFilesAllowed,
  onUpload,
  multiple,
  disabled,
  files
}) {
  // const [disabled, setDisabled] = useState(false);
  const { uploadForm, isSuccess, progress } = 
  useUploadFile('https://run.mocky.io/v3/bbe46e46-f0b1-4ec3-82f2-8192979692af');

  function getFormatsAllowed (formats) {
    return formats.map((format) => `.${format}`).toString()
  }; 

  function validateMaximumFiles (arrayFiles) {
    return (arrayFiles.length + 1) >= maxFilesAllowed;
  }

  function validateMaximumFileSize (file) {
    let maximum = maxSizeAllowed * 1024 * 1024;
    return file.size < maximum;
  };

  function validateNoRepeatedFiles (arrayFiles, file) {
    return arrayFiles.findIndex((f) => f.name === file.name) === -1;
  }

  function onUploadFiles (file) {
    onUpload((prevFiles) => {
      if(validateMaximumFiles(prevFiles)) {
        // setDisabled(true)
        return prevFiles;
      }
      return [...prevFiles, file]
    })
  };

  async function handleUploadFiles (event) {
    event.preventDefault();
    event.stopPropagation();
    
    const chosenFiles = [...chosenFilesRef.current.files];
    const uploadedFiles =[...files];
    
    if (chosenFiles.length > maxFilesAllowed) return;

    for (let file of chosenFiles) {
      if (validateMaximumFileSize(file) && validateNoRepeatedFiles(uploadedFiles, file)) {
        let data = new FormData();
        data.append('file', file);

        const resp = await uploadForm(data);

        if(resp?.status === 200) {
          onUploadFiles(file);
        }
        else {
          console.log('kha')
        }
      }
      else {
        console.log('Supera el peso maximo o es un documento repetido');
      }
    }
  };

  const chosenFilesRef = useRef();

  return (
    <>
        <FileData>
          {disabled ? <img src={"IconUploadDisabled"} /> : <img src={IconUploadFile} />}
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
          onDrop={() => setIsOver(false)}
          onDragEnter={() => setIsOver(true)}
          onDragLeave={() => setIsOver(false)}
          disabled={disabled}
        />
    </>
  )
}

export { FileUploader };