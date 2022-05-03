const Joi = require('joi');

const loginValidator = Joi.object({
  username: Joi.string().required().error(new Error('Username is required.')),
  password: Joi.string().required().error(new Error('Password is required.'))
});

module.exports = { loginValidator };
