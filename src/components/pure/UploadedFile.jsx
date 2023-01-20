import React from 'react'

function UploadedFile ({name, size, deleteFile}) {
  return (
    <section style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
      }}>
      <div style={{
        textAlign: 'left'
      }}>
        <p>{size}</p>
        <p>{name}</p>
      </div>
      <button onClick={()=> deleteFile()}>
        Eliminar
      </button>
    </section>
  )
}

export { UploadedFile };