const multer = require('multer');
const path = require('path');

exports.profileUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, 'static/profile');
    },
    filename: function (req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, `${basename.slice(0, 16)}${+new Date()}${ext}`);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
});
