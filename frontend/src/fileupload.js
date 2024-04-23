import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Implement file upload logic here
    // You can send the selected file to the backend
    // using Axios or another HTTP client library
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept= ".obj,.stl,.fbx,.dae" />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default FileUpload;
