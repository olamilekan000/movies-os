const uuid = require('uuid').v4;
class MoviesDataAccess {
  constructor({ MoviesModel }) {
    this.MoviesModel = MoviesModel;
  }

  async createMovie(movie) {
    const { MoviesModel } = this;
    const newMovie = new MoviesModel({
      _id: uuid(),
      ...movie
    });
    const savedMovie = newMovie.save();
    return savedMovie;
  }

  async getMovies(params) {
    const { MoviesModel } = this;
    const { page, limit, createdBy } = params;

    const movies = await MoviesModel.aggregate([
      { $match: { createdBy } },
      {
        $facet: {
          data: [{ $skip: page * limit }, { $limit: limit }],
          total: [{ $count: 'total' }]
        }
      }
    ]);

    return movies;
  }

  async findMovieByParams(params = {}) {
    const { MoviesModel } = this;
    const movie = await MoviesModel.findOne({
      ...params
    })
      .lean()
      .exec();

    return movie;
  }

  async getMoviesForCurrentMonth({ createdBy }) {
    const { MoviesModel } = this;
    const movies = await MoviesModel.aggregate([
      {
        $project: {
          month: { $month: '$createdAt' },
          createdBy: 1
        }
      },
      {
        $match: {
          createdBy,
          month: new Date().getMonth() + 1
        }
      },
      {
        $count: 'total_movies_for_the_month'
      }
    ]);
    return movies;
  }
}

module.exports = MoviesDataAccess;
