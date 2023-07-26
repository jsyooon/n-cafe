const fs = require('fs');
const multer = require('multer');
const path = require('path');

const getMulter = (folder, options = {}) => {
  const destination = `static/${folder}`;
  try {
    fs.accessSync(destination);
  } catch (error) {
    fs.mkdirSync(destination);
  }

  return multer({
    storage: multer.diskStorage({
      destination: function (req, file, done) {
        done(null, destination);
      },
      filename: function (req, file, done) {
        const ext = path.extname(file.originalname);
        const basename = path.basename(file.originalname, ext);
        done(null, `${basename.slice(0, 16)}${+new Date()}${ext}`);
      },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
    ...options,
  });
};

exports.profileUpload = getMulter('profile');

exports.feedUpload = getMulter('feed');
