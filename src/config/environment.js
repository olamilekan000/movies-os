const { MICROSERVICES } = require('../constants');

const environmentConfig = () => {
  let envConfig = {};

  switch (process.env.NODE_ENV) {
    case 'test':
      envConfig = {
        mongoBD: process.env.MONGODB_URL,
        port: process.env.PORT,
        jwtSecret: process.env.JWT_SECRET,
        omdbapikey: process.env.OMDB_API_KEY,
        microservice: {
          urls: {
            [MICROSERVICES.movies]: 'https://omdbapi.com/'
          },
          timeout: +(process.env.MICROSERVICE_TIMEOUT || 10000)
        }
      };
      break;

    case 'staging':
      break;

    default:
      envConfig = {
        mongoBD: process.env.MONGODB_URL,
        port: process.env.PORT,
        jwtSecret: process.env.JWT_SECRET,
        omdbapikey: process.env.OMDB_API_KEY,
        microservice: {
          urls: {
            [MICROSERVICES.movies]: 'https://omdbapi.com/'
          },
          timeout: +(process.env.MICROSERVICE_TIMEOUT || 10000)
        }
      };
      break;
  }

  return envConfig;
};

module.exports = environmentConfig;
