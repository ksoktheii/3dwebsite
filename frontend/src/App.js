import './App.css';
import FileUpload from './fileupload';

function App() {
 
  return (
    <div className="App">
      <div className="navigation">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <h1>My 3D Website</h1>
        </div>
      </div>

{/* //upload file section */}
      <div className="upload">
        <FileUpload />
      </div>

      {/* view uploaded file */}
      <div className="viewUpload">
        <p>Viewing upload</p>
        <form method='POST' action="/upload" enctype="multipart/form-data" >
          <input type="file" name="image" />
            <input type="submit" name="" id="" />

        </form>
      </div>


    </div>
  );
}

export default App;
