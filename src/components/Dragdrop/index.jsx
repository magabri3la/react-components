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
  width,
  height,
  icon,
  iconDisabled,
  disabled,
  text,
  widthIcon,
  heightIcon,
  margin,
  typeFile,
  multiple,
  getFiles,
  maxQuantityFiles = 100,
  maxSizeFile = 10000, // en kilobytes
  messageMaxSizeFile,
  messageMaxQuantityFiles,
  files,
}) {
  const [uploadedFiles, setUploadedFiles] = React.useState([]);
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
        width={width}
        height={height}
        widthIcon={widthIcon}
        heightIcon={heightIcon}
        margin={margin}
        isOver={isOver}
        disabled={disabled}
        padding="32px"
      >
        <FileUploader 
          onUpload={setUploadedFiles}
          formats={['pdf', 'xml', 'sql']}
          maxSizeAllowed={10}
          maxFilesAllowed={10}
          files={uploadedFiles}
          multiple
          icon={icon}
          iconDisabled={iconDisabled}
        />
      </ContainerDropzone>

      <Errors>
        {files.length === maxQuantityFiles && (
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