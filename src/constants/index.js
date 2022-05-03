const CONSTANTS = {
  MICROSERVICES: {
    movies: 'movies'
  }, // list all microservices here
  QUEUE: {}, // list all queues here,
  USERS: [
    {
      id: 123,
      role: 'basic',
      name: 'Basic Thomas',
      username: 'basic-thomas',
      password: 'sR-_pcoow-27-6PAwCD8'
    },
    {
      id: 434,
      role: 'premium',
      name: 'Premium Jim',
      username: 'premium-jim',
      password: 'GBLtTyq3E_UNjFnpo9m6'
    },
    {
      id: 439,
      role: 'basic',
      name: 'basic Jim',
      username: 'basic-jim',
      password: 'GBLtTyq3E_UNjFnpo9m6'
    }
  ],
  ROLES: {
    BASIC: 'basic',
    PREMIUM: 'premium',
  },
  ALLOWED_MOVIES_FOR_THE_MONTH: 5,
  ERROR_MESSAGES: {
    MICROSERVICE: {
      error: 'MicroserviceError',
      message: 'microservice error',
      code: 500
    }
  }
};

module.exports = CONSTANTS;
