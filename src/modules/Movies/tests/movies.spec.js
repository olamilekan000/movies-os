/* eslint-disable max-len */
/* eslint-disable no-undef */
require('dotenv').config();

const supertest = require('supertest');

const { createToken } = require('../../../config/jwt');
const appServer = require('../../../server');
const ServiceCaller = require('../../../helpers/Service-caller');
const {
  mockMovieResponse,
  createMovieData,
  allMoviesbyPremiumUser,
  createMovieDataBasic,
  allMoviesbyBasicUser,
  allMoviesBasic
} = require('./mock-data');
const MoviesDataAccess = require('../movies.data-access');

jest.mock('../../../helpers/Service-caller');
jest.mock('../movies.data-access');

const app = appServer();

const basicUser = {
  id: 123,
  role: 'basic',
  name: 'Basic Thomas',
  username: 'basic-thomas',
  password: 'sR-_pcoow-27-6PAwCD8'
};

const premiumUser = {
  id: 434,
  role: 'premium',
  name: 'Premium Jim',
  username: 'premium-jim',
  password: 'GBLtTyq3E_UNjFnpo9m6'
};

let premiumUserToken = '';
let basicUserToken = '';

describe('movies', () => {
  beforeAll(() => {
    premiumUserToken = createToken(premiumUser);
    basicUserToken = createToken(basicUser);
  });

  describe('given a premium user', () => {
    it('should be able to create a movie', async () => {
      const servicCallerMock = jest
        .spyOn(ServiceCaller.prototype, 'request')
        .mockReturnValueOnce(mockMovieResponse);

      const movieDataAccessMock = jest
        .spyOn(MoviesDataAccess.prototype, 'createMovie')
        .mockReturnValueOnce(createMovieData);

      const { statusCode, body } = await supertest(app)
        .post('/api/v1/movies')
        .set('Authorization', `Bearer ${premiumUserToken}`)
        .send({ title: 'king kong' });

      expect(statusCode).toBe(201);
      expect(body.success).toBe(true);
      expect(body.message).toBe('ok');
      expect(body.data.deletedAt).toBe(null);
      expect(body.data.deleted).toBe(false);
      expect(body.data._id).toBe('103d0f83-cfbe-4bec-b9eb-b18bbadeccf7');
      expect(body.data.title).toBe('King Kong');
      expect(body.data.released).toBe('2005-12-13T23:00:00.000Z');
      expect(body.data.genre).toBe('Action, Adventure, Drama');
      expect(body.data.director).toBe('Peter Jackson');
      expect(body.data.poster).toBe(
        'https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      );
      expect(body.data.type).toBe('movie');
      expect(body.data.createdBy).toBe(434);
      expect(body.data.createdAt).toBe('2022-05-03T10:50:11.979Z');
      expect(body.data.updatedAt).toBe('2022-05-03T10:50:11.979Z');

      expect(servicCallerMock).toHaveBeenCalledTimes(1);
      expect(movieDataAccessMock).toHaveBeenCalledTimes(1);
    });

    it('should get all movies created by a premium user', async () => {
      const movieDataAccessMock = jest
        .spyOn(MoviesDataAccess.prototype, 'getMovies')
        .mockReturnValueOnce(allMoviesbyPremiumUser);

      const { statusCode, body } = await supertest(app)
        .get('/api/v1/movies')
        .set('Authorization', `Bearer ${premiumUserToken}`);

      expect(statusCode).toBe(200);
      expect(body.success).toBe(true);
      expect(body.message).toBe('ok');
      expect(body.total).toBe(1);
      expect(body.limit).toBe(10);
      expect(body.page).toBe(0);
      expect(body.data[0].deletedAt).toBe(null);
      expect(body.data[0].deleted).toBe(false);
      expect(body.data[0]._id).toBe('103d0f83-cfbe-4bec-b9eb-b18bbadeccf7');
      expect(body.data[0].title).toBe('King Kong');
      expect(body.data[0].released).toBe('2005-12-13T23:00:00.000Z');
      expect(body.data[0].genre).toBe('Action, Adventure, Drama');
      expect(body.data[0].director).toBe('Peter Jackson');
      expect(body.data[0].poster).toBe(
        'https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      );
      expect(body.data[0].type).toBe('movie');
      expect(body.data[0].createdBy).toBe(434);
      expect(body.data[0].createdAt).toBe('2022-05-03T10:50:11.979Z');
      expect(body.data[0].updatedAt).toBe('2022-05-03T10:50:11.979Z');

      expect(movieDataAccessMock).toHaveBeenCalledTimes(1);
    });

    it('should get a movie created by a premium user', async () => {
      const movieDataAccessMock = jest
        .spyOn(MoviesDataAccess.prototype, 'findMovieByParams')
        .mockReturnValueOnce(createMovieData);

      const { statusCode, body } = await supertest(app)
        .get(`/api/v1/movies/103d0f83-cfbe-4bec-b9eb-b18bbadeccf7`)
        .set('Authorization', `Bearer ${premiumUserToken}`);

      expect(statusCode).toBe(200);
      expect(body.success).toBe(true);
      expect(body.message).toBe('ok');
      expect(body.data.deletedAt).toBe(null);
      expect(body.data.deleted).toBe(false);
      expect(body.data._id).toBe('103d0f83-cfbe-4bec-b9eb-b18bbadeccf7');
      expect(body.data.title).toBe('King Kong');
      expect(body.data.released).toBe('2005-12-13T23:00:00.000Z');
      expect(body.data.genre).toBe('Action, Adventure, Drama');
      expect(body.data.director).toBe('Peter Jackson');
      expect(body.data.poster).toBe(
        'https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      );
      expect(body.data.type).toBe('movie');
      expect(body.data.createdBy).toBe(434);
      expect(body.data.createdAt).toBe('2022-05-03T10:50:11.979Z');
      expect(body.data.updatedAt).toBe('2022-05-03T10:50:11.979Z');

      expect(movieDataAccessMock).toHaveBeenCalledTimes(1);
    });

    it('should not be able to get a movie if no token', async () => {
      const { statusCode, body } = await supertest(app).get(
        `/api/v1/movies/103d0f83-cfbe-4bec-b9eb-b18bbadeccf7`
      );

      expect(statusCode).toBe(401);
      expect(body.success).toBe(false);
      expect(body.message).toBe('Invalid access token');
      expect(body.data).toEqual({});
    });

    it('should not be able to get all movies if no token', async () => {
      const { statusCode, body } = await supertest(app).get(`/api/v1/movies/`);

      expect(statusCode).toBe(401);
      expect(body.success).toBe(false);
      expect(body.message).toBe('Invalid access token');
      expect(body.data).toEqual({});
    });

    it('should not be able to create a movie if no token', async () => {
      const { statusCode, body } = await supertest(app).post(`/api/v1/movies/`);

      expect(statusCode).toBe(401);
      expect(body.success).toBe(false);
      expect(body.message).toBe('Invalid access token');
      expect(body.data).toEqual({});
    });
  });

  describe('given a basic user', () => {
    it('should be able to create a movie', async () => {
      const servicCallerMock = jest
        .spyOn(ServiceCaller.prototype, 'request')
        .mockReturnValueOnce(mockMovieResponse);

      const movieDataAccessMock = jest
        .spyOn(MoviesDataAccess.prototype, 'createMovie')
        .mockReturnValueOnce(createMovieDataBasic);

      const movieDataAccessCountForTheMonthMock = jest
        .spyOn(MoviesDataAccess.prototype, 'getMoviesForCurrentMonth')
        .mockReturnValueOnce([]);

      const { statusCode, body } = await supertest(app)
        .post('/api/v1/movies')
        .set('Authorization', `Bearer ${basicUserToken}`)
        .send({ title: 'avatar' });

      expect(statusCode).toBe(201);
      expect(body.success).toBe(true);
      expect(body.message).toBe('ok');
      expect(body.data.deletedAt).toBe(null);
      expect(body.data.deleted).toBe(false);
      expect(body.data._id).toBe('4541e5f2-3a5a-4671-851b-71e12341b0f0');
      expect(body.data.title).toBe('Avatar');
      expect(body.data.released).toBe('2009-12-17T23:00:00.000Z');
      expect(body.data.genre).toBe('Action, Adventure, Fantasy');
      expect(body.data.director).toBe('James Cameron');
      expect(body.data.poster).toBe(
        'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'
      );
      expect(body.data.type).toBe('movie');
      expect(body.data.createdBy).toBe(123);
      expect(body.data.createdAt).toBe('2022-05-03T15:08:45.378Z');
      expect(body.data.updatedAt).toBe('2022-05-03T15:08:45.378Z');

      expect(servicCallerMock).toHaveBeenCalledTimes(1);
      expect(movieDataAccessMock).toHaveBeenCalledTimes(1);
      expect(movieDataAccessCountForTheMonthMock).toHaveBeenCalledTimes(1);
    });

    it('should get all movies created by a premium user', async () => {
      const movieDataAccessMock = jest
        .spyOn(MoviesDataAccess.prototype, 'getMovies')
        .mockReturnValueOnce(allMoviesbyBasicUser);

      const { statusCode, body } = await supertest(app)
        .get('/api/v1/movies')
        .set('Authorization', `Bearer ${basicUserToken}`);

      expect(statusCode).toBe(200);
      expect(body.success).toBe(true);
      expect(body.message).toBe('ok');
      expect(body.total).toBe(7);
      expect(body.limit).toBe(10);
      expect(body.page).toBe(0);

      expect(body.data[0].deletedAt).toBe(null);
      expect(body.data[0].deleted).toBe(false);
      expect(body.data[0]._id).toBe('4541e5f2-3a5a-4671-851b-71e12341b0f0');
      expect(body.data[0].title).toBe('Avatar');
      expect(body.data[0].released).toBe('2009-12-17T23:00:00.000Z');
      expect(body.data[0].genre).toBe('Action, Adventure, Fantasy');
      expect(body.data[0].director).toBe('James Cameron');
      expect(body.data[0].poster).toBe(
        'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'
      );
      expect(body.data[0].type).toBe('movie');
      expect(body.data[0].createdBy).toBe(123);
      expect(body.data[0].createdAt).toBe('2022-05-03T15:08:45.378Z');
      expect(body.data[0].updatedAt).toBe('2022-05-03T15:08:45.378Z');

      expect(movieDataAccessMock).toHaveBeenCalledTimes(1);
    });

    it('should get a movie created by a basic user', async () => {
      const movieDataAccessMock = jest
        .spyOn(MoviesDataAccess.prototype, 'findMovieByParams')
        .mockReturnValueOnce(createMovieDataBasic);

      const { statusCode, body } = await supertest(app)
        .get(`/api/v1/movies/4541e5f2-3a5a-4671-851b-71e12341b0f0`)
        .set('Authorization', `Bearer ${basicUserToken}`);

      expect(statusCode).toBe(200);
      expect(body.success).toBe(true);
      expect(body.message).toBe('ok');

      expect(body.data.deletedAt).toBe(null);
      expect(body.data.deleted).toBe(false);
      expect(body.data._id).toBe('4541e5f2-3a5a-4671-851b-71e12341b0f0');
      expect(body.data.title).toBe('Avatar');
      expect(body.data.released).toBe('2009-12-17T23:00:00.000Z');
      expect(body.data.genre).toBe('Action, Adventure, Fantasy');
      expect(body.data.director).toBe('James Cameron');
      expect(body.data.poster).toBe(
        'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'
      );
      expect(body.data.type).toBe('movie');
      expect(body.data.createdBy).toBe(123);
      expect(body.data.createdAt).toBe('2022-05-03T15:08:45.378Z');
      expect(body.data.updatedAt).toBe('2022-05-03T15:08:45.378Z');

      expect(movieDataAccessMock).toHaveBeenCalledTimes(1);
    });

    it('should not be able to get a movie if no token', async () => {
      const { statusCode, body } = await supertest(app).get(
        `/api/v1/movies/4541e5f2-3a5a-4671-851b-71e12341b0f`
      );

      expect(statusCode).toBe(401);
      expect(body.success).toBe(false);
      expect(body.message).toBe('Invalid access token');
      expect(body.data).toEqual({});
    });

    it('should not be able to create a movie if they have created up to 5 movies for the month', async () => {
      const movieDataAccessCountForTheMonthMock = jest
        .spyOn(MoviesDataAccess.prototype, 'getMoviesForCurrentMonth')
        .mockReturnValueOnce([
          { total_movies_for_the_month: allMoviesBasic.length }
        ]);

      const servicCallerMock = jest
        .spyOn(ServiceCaller.prototype, 'request')
        .mockReturnValueOnce(mockMovieResponse);

      const movieDataAccessMock = jest
        .spyOn(MoviesDataAccess.prototype, 'createMovie')
        .mockReturnValueOnce(createMovieDataBasic);

      const { statusCode, body } = await supertest(app)
        .post('/api/v1/movies')
        .set('Authorization', `Bearer ${basicUserToken}`)
        .send({ title: 'avatar' });

      expect(statusCode).toBe(403);
      expect(body.success).toBe(false);
      expect(body.message).toBe(
        'You have used use your movie quota for the month. Pls try again next month'
      );
      expect(body.data).toEqual({});

      expect(movieDataAccessCountForTheMonthMock).toHaveBeenCalledTimes(1);
      expect(servicCallerMock).not.toHaveBeenCalled();
      expect(movieDataAccessMock).not.toHaveBeenCalled();
    });
  });
});
