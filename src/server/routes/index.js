const authRoutes = require('./auth');
const moviesRoute = require('./movies');

const apiRouter = (Router) => {
  const router = Router();

  router.use('/auth', authRoutes(Router));
  router.use('/movies', moviesRoute(Router));

  return router;
};

module.exports = apiRouter;
