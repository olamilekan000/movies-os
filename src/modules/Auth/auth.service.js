const { createToken } = require('../../config/jwt');
const {
  makeHttpSuccess,
  makeHttpError
} = require('../../helpers/httpAdapters');

class AuthService {
  constructor({ AuthDataAccess }) {
    this.AuthDataAccess = AuthDataAccess;
  }

  async login(httpRequest) {
    const {
      body: { username, password }
    } = httpRequest;

    const { AuthDataAccess } = this;

    const user = await AuthDataAccess.login({ username });

    if (!user || user.password !== password) {
      return makeHttpError({
        statusCode: 401,
        errorMessage: 'invalid username or password'
      });
    }

    const token = createToken(user);

    return makeHttpSuccess(
      {
        statusCode: 200,
        successMessage: 'ok',
        successData: {}
      },
      { token }
    );
  }
}

module.exports = AuthService;
