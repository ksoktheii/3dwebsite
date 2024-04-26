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

      <div className="upload">
        <FileUpload />
      </div>

    </div>
  );
}

export default App;
