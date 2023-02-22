const express = require('express');
const router = express.Router();

router.get('/signup', (req, res, next) => {
  const newUser = req.session.newUser;
  if (newUser) {
    return res.status(200).json({
      name: newUser.name,
      profileImage: newUser.profileImage,
    });
  }
  req.session.destroy(() => {
    res.clearCookie('newUser');
    return res.status(401).json(null);
  });
});

module.exports = router;
