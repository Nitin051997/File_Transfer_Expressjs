const multer  = require('multer')
const fs = require('fs');
const path = require('path');

exports.storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = `filemanager/${req.header('userID')}`;
    // Check if the directory exists, if not, create it
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})