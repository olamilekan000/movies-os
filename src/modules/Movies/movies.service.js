const {
  makeHttpSuccess,
  makeHttpError,
  normalizeHttpRespone
} = require('../../helpers/httpAdapters');
const {
  MICROSERVICES,
  ROLES,
  ALLOWED_MOVIES_FOR_THE_MONTH
} = require('../../constants');

class MoviesService {
  constructor({
    MoviesDataAccess,
    ServiceCaller,
    environmentConfig: { omdbapikey }
  }) {
    this.MoviesDataAccess = MoviesDataAccess;
    this.ServiceCaller = ServiceCaller;
    this.omdbapikey = omdbapikey;
  }

  async createMovie(httpRequest) {
    const { body, sub } = httpRequest;

    const { MoviesDataAccess, ServiceCaller, omdbapikey } = this;

    if (sub.role === ROLES.BASIC) {
      const moviesForTheMonth = await this.getMoviesCountForTheMonth(sub);
      if (moviesForTheMonth >= ALLOWED_MOVIES_FOR_THE_MONTH)
        return makeHttpError({
          statusCode: 403,
          errorMessage:
            'You have used use your movie quota for the month. Pls try again next month',
          data: {}
        });
    }

    const resp = await ServiceCaller.request({
      microservice: MICROSERVICES.movies,
      method: 'POST',
      path: '',
      params: {
        t: body.title,
        apiKey: omdbapikey
      }
    });

    if (!resp?.Response || resp.Response === 'False') {
      return makeHttpError({
        statusCode: 400,
        errorMessage: 'Could not create movie, pls try again',
        data: {}
      });
    }

    const movie = await MoviesDataAccess.createMovie({
      ...normalizeHttpRespone(resp),
      createdBy: sub.userId
    });

    return makeHttpSuccess({
      statusCode: 201,
      successMessage: 'ok',
      successData: movie
    });
  }

  async getMovies(httpRequest) {
    const {
      queryParams: { limit, page },
      sub
    } = httpRequest;

    const { MoviesDataAccess } = this;

    const parsedLimit = limit ? +limit : 10;
    const parsedPage = page ? +page : 0;

    const movies = await MoviesDataAccess.getMovies({
      page: parsedPage,
      limit: parsedLimit,
      createdBy: sub.userId
    });

    return makeHttpSuccess(
      {
        statusCode: 200,
        successMessage: 'ok',
        successData: movies[0].data
      },
      {
        total: movies[0]?.total[0]?.total,
        limit: parsedLimit,
        page: parsedPage
      }
    );
  }

  async getMovie(httpRequest) {
    const {
      params: { id },
      sub
    } = httpRequest;

    const { MoviesDataAccess } = this;

    const movie = await MoviesDataAccess.findMovieByParams({
      _id: id,
      createdBy: sub.userId
    });

    return makeHttpSuccess({
      statusCode: 200,
      successMessage: 'ok',
      successData: movie || {}
    });
  }

  async getMoviesCountForTheMonth(sub) {
    const { MoviesDataAccess } = this;

    const moviesForTheMonth = await MoviesDataAccess.getMoviesForCurrentMonth({
      createdBy: sub.userId
    });

    if (!moviesForTheMonth.length) return 0;
    return moviesForTheMonth[0]?.total_movies_for_the_month || 0;
  }
}

module.exports = MoviesService;
