import React, { useRef } from 'react'

function Child (props) {
  const {name, send, updateName} = props;

  const messageRef = useRef('');
  const nameRef = useRef('');


  function pressButtonText () {
    const text = messageRef.current.value;
    alert('Default text ' + text)
  }

  function submitName (e) {
    e.preventDefault();
    updateName(nameRef.current.value)
  }

  function setSelectedFile(e) {
    const files = [...e]
    console.log(files);

    if (files.length > 4) return alert('MAX 10 files');

    files.forEach(file => {
      let size =  Math.round(file.size/1000000)
      console.log(size)
      if ( size < 10 ) {
        console.log('File size is ok')
      }
    })
  }

  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);
  
    axios
      .post(UPLOAD_URL, formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };

  return (
    <div style={{backgroundColor : 'cyan', padding: '8px', display: 'grid', gap: '12px'}}>
        <p onMouseOver={() => console.log('mouseover') }>Hello {name}</p>
        <button onClick={() => console.log("Press btn 1")}>Button 1</button>
        <button onClick={() => console.log("Press btn 2")}>Button 2</button>
        <button onClick={() => send(name)}>Button 3</button>
        <button onClick={() => pressButtonText()}>Button pressButtonText</button>
        <input 
          placeholder='Input de texto'
          onChange={(event)=> console.log('change', event.target.value)}
          ref={messageRef}
          type="text" 
          name="" 
          id="" />
        <div style={{marginTop: '32px'}}>
          <form onSubmit={submitName}>
            <input 
              type="text" 
              placeholder='New name' 
              ref={nameRef} />
            <button type='submit'>Update name</button>
          </form>
        </div>

        <input
        type="file" 
        accept='.xml, .pdf'
        onChange={(e)=> setSelectedFile(e.target.files)}
        name="" 
        id="" 
        multiple  />
    </div>
  )
}

export { Child };