const multer = require("multer");
const { v4 } = require("uuid");

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, callback) => {
    const filename = v4() + '-' + file.originalname;
    callback(null, filename);
  }
});

const upload = multer({ storage });

module.exports = upload;