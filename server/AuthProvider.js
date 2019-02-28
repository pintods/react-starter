const jwt = require("jsonwebtoken");

module.exports = function TokenProvider() {
  const tokenSecret = "@riF33t";

  function _createToken(payload, expiration) {
    return new Promise(function(resolve, reject) {
      try {
        if (typeof expiration === "undefined") {
          expiration = 14400;
        }
        let userToken = jwt.sign(payload, tokenSecret, {
          expiresIn: expiration
        });
        resolve(userToken);
      } catch (error) {
        reject({ error: error });
      }
    });
  }

  function _verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, tokenSecret, (error, decoded) => {
        if (error) {
          reject(error);
        }
        resolve(decoded);
      });
    });
  }

  return {
    createToken: _createToken,
    verifyToken: _verifyToken
  };
};
