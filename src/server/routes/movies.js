const { container } = require('../../config/container');
const {
  validateAccessToken
} = require('../../middlewares/validateAccessToken');

const moviesRoute = (Router) => {
  const router = Router();

  const MoviesController = container.resolve('MoviesController');

  router.route('/:id').get(validateAccessToken, MoviesController.getMovie);

  router
    .route('/')
    .get(validateAccessToken, MoviesController.getMovies)
    .post(validateAccessToken, MoviesController.createMovie);

  return router;
};

module.exports = moviesRoute;
