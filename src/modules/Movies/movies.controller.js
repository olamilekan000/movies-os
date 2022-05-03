/* eslint-disable brace-style */
const logger = require('../../config/winston');
const { adaptRequest } = require('../../helpers/httpAdapters');

class MoviesController {
  constructor({ MoviesService }) {
    this.MoviesService = MoviesService;

    this.createMovie = this.createMovie.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  async createMovie(req, res, next) {
    try {
      const httpRequest = adaptRequest(req);

      const { headers, statusCode, data } =
        await this.MoviesService.createMovie(httpRequest);

      res.set(headers).status(statusCode).send(data);
    } catch (error) {
      logger.log({ level: 'error', message: error.message });
      next(error);
    }
  }

  async getMovies(req, res, next) {
    try {
      const httpRequest = adaptRequest(req);

      const { headers, statusCode, data } = await this.MoviesService.getMovies(
        httpRequest
      );

      res.set(headers).status(statusCode).send(data);
    } catch (error) {
      logger.log({ level: 'error', message: error.message });
      next(error);
    }
  }

  async getMovie(req, res, next) {
    try {
      const httpRequest = adaptRequest(req);

      const { headers, statusCode, data } = await this.MoviesService.getMovie(
        httpRequest
      );

      res.set(headers).status(statusCode).send(data);
    } catch (error) {
      logger.log({ level: 'error', message: error.message });
      next(error);
    }
  }
}

module.exports = MoviesController;
