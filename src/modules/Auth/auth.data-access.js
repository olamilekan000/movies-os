/**
  @param - database instance (e.g User Model)
*/

const { USERS } = require('../../constants');

class AuthDataAccess {
  login({ username }) {
    return USERS.find((u) => u.username === username);
  }
}

module.exports = AuthDataAccess;
