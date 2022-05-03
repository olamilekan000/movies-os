/* eslint-disable no-undef */
require('dotenv').config();
const supertest = require('supertest');
const appServer = require('../../../server');

const app = appServer();

const userInput = {
  username: 'premium-jim',
  password: 'GBLtTyq3E_UNjFnpo9m6'
};

describe('auth', () => {
  describe('user login', () => {
    describe('given the username and password are valid', () => {
      it('should return the a token', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/api/v1/auth/login')
          .send(userInput);

        expect(statusCode).toBe(200);
        expect(body).toEqual({
          success: true,
          message: 'ok',
          data: {},
          token: expect.any(String)
        });
      });
    });

    describe('given the username and password are not valid', () => {
      it('should return the a 401 error', async () => {
        const { statusCode, body } = await supertest(app)
          .post('/api/v1/auth/login')
          .send({
            username: 'basic-jim',
            password: 'GBLtTyq3E_UNjFnpo9m'
          });

        expect(statusCode).toBe(401);
        expect(body).toEqual({
          success: false,
          message: 'invalid username or password',
          data: {}
        });
      });
    });
  });
});
