const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images'); // Save uploaded files to the 'images' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Use a unique filename
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

let latestModelFilename = ''; // Store the filename of the latest uploaded model

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Handle file upload
app.post('/upload', upload.single('model'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }
  latestModelFilename = file.filename; // Update the latest uploaded model filename
  res.status(200).send('File uploaded successfully.');
});

// Provide the URL of the latest model
app.get('/latest-model', (req, res) => {
  if (!latestModelFilename) {
    return res.status(404).json({ error: 'No model uploaded yet.' });
  }
  const latestModelUrl = `/images/${latestModelFilename}`;
  res.json({ url: latestModelUrl });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
