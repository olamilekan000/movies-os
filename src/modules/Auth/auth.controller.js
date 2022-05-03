/* eslint-disable brace-style */
const logger = require('../../config/winston');
const { adaptRequest } = require('../../helpers/httpAdapters');

class AuthController {
  constructor({ AuthService }) {
    this.AuthService = AuthService;

    this.login = this.login.bind(this);
  }

  async login(req, res, next) {
    try {
      const httpRequest = adaptRequest(req);

      const { headers, statusCode, data } = await this.AuthService.login(
        httpRequest
      );

      res.set(headers).status(statusCode).send(data);
    } catch (error) {
      logger.log({ level: 'error', message: error.message });
      next(error);
    }
  }
}

module.exports = AuthController;
