const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
  try {
    const token = req.headers.token;
    const decodedToken = jwt.verify(token, 'TFV7OVFEV5KEER5NVER_SVEF6ECBEREBERETB');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch(error) {
    res.status(401).json({
      error: error.message,
      exp : 'You dont have right'
    });
  }
};