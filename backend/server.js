const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Configure Multer to store uploaded files in the 'uploads' directory
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Define a route for file uploads
app.post('/upload', upload.single('model'), (req, res) => {
  // Handle the uploaded file here
  // You can access the file details from req.file
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }
  res.status(200).send('File uploaded successfully.');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
