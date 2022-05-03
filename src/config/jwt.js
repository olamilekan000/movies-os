/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./environment')();

const createToken = ({ id, name, role }) =>
  jwt.sign(
    {
      userId: id,
      name,
      role
    },
    jwtSecret,
    {
      issuer: 'https://www.netguru.com/',
      subject: `${id}`,
      expiresIn: 30 * 60
    }
  );

const verifyJwtToken = (token, secret) =>
  new Promise((resolve, reject) =>
    jwt.verify(token, secret, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded);
    })
  );

module.exports = {
  createToken,
  verifyJwtToken
};
