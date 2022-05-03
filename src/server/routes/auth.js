const { container } = require('../../config/container');
const { validator } = require('../../middlewares/validator');
const { loginValidator } = require('../../validators/Joi/auth');

const authRoutes = (Router) => {
  const router = Router();

  const AuthController = container.resolve('AuthController');

  router.route('/login').post(validator(loginValidator), AuthController.login);

  return router;
};

module.exports = authRoutes;
