import React, { useRef } from 'react'

function FileUploader ({
  formats,
  maxSizeAllowed,
  maxFilesAllowed,
  onUpload,
  multiple
}) {

  function getFormatsAllowed (formats) {
    return formats.map((format) => `.${format}`).toString()
  }; 

  function validateMaximumFileSize (file) {
    let maximum = maxSizeAllowed * 1024 * 1024;
    return file.size < maximum;
  };

  function onFilesSelected (newFilesSelected) {
    onUpload((prevFiles) => {
      if(prevFiles.length >= maxFilesAllowed) return prevFiles;
      return [...prevFiles, newFilesSelected]
    })
  };

  function handleFilesDrop (event) {
    event.preventDefault();
    event.stopPropagation();
    
    const fileList = [...uploadedFiles.current.files];

    if (fileList.length > maxFilesAllowed) return;

    fileList.forEach(file => {
      if (validateMaximumFileSize(file)) {
        console.log('File size is ok')
        onFilesSelected(file)
      }
      else {
        console.log(`${file.name} is too large, please pick a smaller file`)
      }
    })
  };

  const uploadedFiles = useRef();

  return (
    <div>
      <input
        type="file" 
        accept={getFormatsAllowed(formats)}
        onChange={(event)=> handleFilesDrop(event)}
        ref={uploadedFiles}
        multiple={multiple}
      />
    </div>
  )
}

export { FileUploader };