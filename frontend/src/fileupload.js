import React, { useState } from 'react';
import axios from 'axios';

const allowedFileTypes = ['obj', 'fbx', 'dae', 'stl', 'glTF'];

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileType = file.name.split('.').pop().toLowerCase();
      if (allowedFileTypes.includes(fileType)) {
        setSelectedFile(file);
        setErrorMessage('');
      } else {
        setSelectedFile(null);
        setErrorMessage('Invalid file format, try again');
      }
    }
  };

  const handleModelUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('model', selectedFile);

      axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('Upload successful', response.data);
        setSelectedFile(null);
      })
      .catch(error => {
        console.error('Upload failed:', error);
       
      });
    } else {
      setErrorMessage('Please select a file before uploading');
    }
  };

  return (
    <div className="uploadModel">
      <input type="file" accept=".obj, .glTF, .fbx, .dae, .stl, .glb" onChange={handleFileChange} />
      {errorMessage && <p>{errorMessage}</p>}
      {selectedFile && <p>{selectedFile.name}</p>}
      <button type="button" onClick={handleModelUpload}>Upload 3D Model</button>
    </div>
  );
};

export default FileUpload;

