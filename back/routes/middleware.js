const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.clearCookie("userID");
    res.clearCookie("connect.sid");
    res.status(401).json({ reason: "로그인이 필요합니다." });
  }
};

const isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ reason: "이미 로그인이 되어있습니다." });
  }
};

module.exports = { isLoggedIn, isNotLoggedIn };
