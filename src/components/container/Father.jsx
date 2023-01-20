import React from 'react'
import { FileUploader } from '../pure/FileUploader';
import { UploadedFile } from '../pure/UploadedFile';
import FilesDragAndDrop from '@yelysei/react-files-drag-and-drop';

function Father () {
  const [files, setFiles] = React.useState([]);

  function deleteFile (currentFile) {
    const newFiles = files.filter((file) => file.name !== currentFile)
    setFiles(newFiles)
  }

  return (
    <div style={{backgroundColor : 'tomato', padding: '16px'}}>
        <p>Carga de archivos {files.length}</p>
        <FileUploader 
          onUpload={setFiles}
          formats={['pdf', 'xml', 'sql']}
          maxSizeAllowed={10}
          maxFilesAllowed={10}
          multiple
        />

        {files.length > 0 && files.map((file, index) => (
          <UploadedFile 
            key={index}
            name={file.name} 
            size={file.size} 
            deleteFile={() => deleteFile(file.name)}
          />
        ))}
    </div>
  )
}

export { Father };