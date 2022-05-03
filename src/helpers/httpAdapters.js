const adaptRequest = (req = {}) =>
  Object.freeze({
    path: req.path,
    method: req.method,
    params: req.params,
    queryParams: req.query,
    body: req.body,
    sub: req.sub
  });

const makeHttpError = (
  { statusCode, errorMessage, errorData = {} },
  params = {}
) => ({
  headers: {
    'Content-Type': 'application/json'
  },
  statusCode,
  data: JSON.stringify({
    message: errorMessage,
    success: false,
    data: errorData,
    ...params
  })
});

const makeHttpSuccess = (
  { statusCode, successMessage, successData = {} },
  params = {}
) => ({
  headers: {
    'Content-Type': 'application/json'
  },
  statusCode,
  data: JSON.stringify({
    success: true,
    message: successMessage,
    data: successData,
    ...params
  })
});

const normalizeHttpRespone = (movie) => ({
  title: movie.Title,
  released: movie.Released,
  genre: movie.Genre,
  director: movie.Director,
  poster: movie.Poster,
  type: movie.Type
});

module.exports = {
  adaptRequest,
  makeHttpError,
  makeHttpSuccess,
  normalizeHttpRespone
};
