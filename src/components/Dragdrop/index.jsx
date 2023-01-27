import React from 'react'
import { FileUploader } from './components/FileUploader/FileUploader';
import { UploadedFile } from './components/UploadedFile/UploadedFile';
import {
  ContainerDropzone,
  ContainerMessageError,
  Errors
} from "./styled";

import { TextStyle } from '../../commons/styled';
import { COLORS } from '../../commons/colors';
import IconWarning from "../../assets/icon_warning-red.svg";
import { useUploadFile } from './hooks/useUploadFile';

function Dragdrop ({
  messageMaxSizeFile,
  messageMaxQuantityFiles,
  disabled,
  formats,
  multiple,
  uploadedFiles, 
  setUploadedFiles,
  maxSizeAllowed,
  maxFilesAllowed
}) {
  // const [uploadedFiles, setUploadedFiles] = React.useState([]);
  const [isOver, setIsOver] = React.useState(false);
  const [showErrorSize, setShowErrorSize] = React.useState(false);
  const [uploadPercentage, setUploadPercentage] = React.useState(0);

  function deleteFile (currentFile) {
    const newFiles = uploadedFiles.filter((file) => file.name !== currentFile)
    setUploadedFiles(newFiles);
  }

  function uploadFile (file) {
    let data = new FormData();
    data.append('file', file);

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        if (percent < 100) {
          setUploadPercentage(percent);
        }
      }
    }
  }
  
  return (
    <>
      <ContainerDropzone
        widthIcon={"48px"}
        heightIcon={"48px"}
        margin={"24px 0px"}
        isOver={isOver}
        disabled={disabled}
        padding="32px"
      >
        <FileUploader
          disabled={disabled}
          multiple={multiple}
          maxSizeAllowed={maxSizeAllowed}
          maxFilesAllowed={maxFilesAllowed}
          files={uploadedFiles}
          onUpload={setUploadedFiles}
          formats={formats}
        />
      </ContainerDropzone>

      <Errors>
        {uploadedFiles.length === maxFilesAllowed && (
          <ContainerMessageError>
            <img src={IconWarning} alt="warning" />
            <TextStyle
              color={COLORS.RED}
              size="12"
              bold={400}
              margin="-10px 0px 0px 0px"
            >
              {messageMaxQuantityFiles}
            </TextStyle>
          </ContainerMessageError>
        )}

        {showErrorSize && (
          <ContainerMessageError>
            <img src={IconWarning} alt="warning" />
            <TextStyle
              color={COLORS.RED}
              size="12"
              bold={400}
              margin="-10px 0px 0px 0px"
            >
              {messageMaxSizeFile}
            </TextStyle>
          </ContainerMessageError>
        )}
      </Errors>
      
      {uploadedFiles.length > 0 && uploadedFiles.map((file, index) => (
        <UploadedFile
          uploaded={false}
          key={index}
          item={file}
          name={file.name} 
          size={file.size} 
          cancelFile={() => deleteFile(file.name)}
          deleteFile={() => deleteFile(file.name)}
        />
      ))}
    </>
  )
}

export { Dragdrop };