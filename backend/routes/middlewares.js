exports.isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) return res.status(401).send('로그인이 필요합니다.');
  next();
};

exports.isUnAuth = (req, res, next) => {
  if (req.isAuthenticated()) return res.status(401).send('로그아웃 상태에서만 접근 가능합니다.');
  next();
};
