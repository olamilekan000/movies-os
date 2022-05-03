/* eslint-disable max-len */
const mockMovieResponse = {
  Title: 'King Kong',
  Year: '2005',
  Rated: 'PG-13',
  Released: '14 Dec 2005',
  Runtime: '187 min',
  Genre: 'Action, Adventure, Drama',
  Director: 'Peter Jackson',
  Writer: 'Fran Walsh, Philippa Boyens, Peter Jackson',
  Actors: 'Naomi Watts, Jack Black, Adrien Brody',
  Plot: 'A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.',
  Language: 'English',
  Country: 'United States, New Zealand, Germany',
  Awards: 'Won 3 Oscars. 46 wins & 104 nominations total',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '7.2/10' },
    { Source: 'Rotten Tomatoes', Value: '84%' },
    { Source: 'Metacritic', Value: '81/100' }
  ],
  Metascore: '81',
  imdbRating: '7.2',
  imdbVotes: '415,643',
  imdbID: 'tt0360717',
  Type: 'movie',
  DVD: '28 Mar 2006',
  BoxOffice: '$218,080,025',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True'
};

const createMovieData = {
  deletedAt: null,
  deleted: false,
  _id: '103d0f83-cfbe-4bec-b9eb-b18bbadeccf7',
  title: 'King Kong',
  released: '2005-12-13T23:00:00.000Z',
  genre: 'Action, Adventure, Drama',
  director: 'Peter Jackson',
  poster:
    'https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  type: 'movie',
  createdBy: 434,
  createdAt: '2022-05-03T10:50:11.979Z',
  updatedAt: '2022-05-03T10:50:11.979Z'
};

const createMovieDataBasic = {
  deletedAt: null,
  deleted: false,
  _id: '4541e5f2-3a5a-4671-851b-71e12341b0f0',
  title: 'Avatar',
  released: '2009-12-17T23:00:00.000Z',
  genre: 'Action, Adventure, Fantasy',
  director: 'James Cameron',
  poster:
    'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
  type: 'movie',
  createdBy: 123,
  createdAt: '2022-05-03T15:08:45.378Z',
  updatedAt: '2022-05-03T15:08:45.378Z'
};

const allMoviesBasic = [
  createMovieDataBasic,
  {
    _id: '1ed7d0f0-1636-47fa-ba79-7bf87b69aec9',
    deletedAt: null,
    deleted: false,
    title: 'The Avengers',
    released: '2012-05-03T23:00:00.000Z',
    genre: 'Action, Adventure, Sci-Fi',
    director: 'Joss Whedon',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    type: 'movie',
    createdBy: 123,
    createdAt: '2022-05-02T19:59:01.708Z',
    updatedAt: '2022-05-02T19:59:01.708Z'
  },
  {
    _id: '3175ce81-01c3-48c1-afb4-9ae0aae860ce',
    deletedAt: null,
    deleted: false,
    title: 'Xmen: Contest of Champions Part 2',
    released: '2020-01-05T23:00:00.000Z',
    genre: 'Animation, Short',
    director: 'N/A',
    poster: 'N/A',
    type: 'movie',
    createdBy: 123,
    createdAt: '2022-04-02T19:59:01.708Z',
    updatedAt: '2022-04-02T19:59:01.708Z'
  },
  {
    _id: '56d16e49-3203-4c78-9ab9-2ed50839d3d0',
    deletedAt: null,
    deleted: false,
    title: 'Voltron: Legendary Defender',
    released: '2016-06-09T23:00:00.000Z',
    genre: 'Animation, Action, Adventure',
    director: 'N/A',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2MzMzNTg5NV5BMl5BanBnXkFtZTgwMzAzOTc4ODE@._V1_SX300.jpg',
    type: 'series',
    createdBy: 123,
    createdAt: '2022-05-02T21:42:01.451Z',
    updatedAt: '2022-05-02T21:42:01.451Z'
  },
  {
    _id: 'c6268208-2cc6-45ca-8b6f-731127638ba0',
    deletedAt: null,
    deleted: false,
    title: 'Starwars: Goretech',
    released: '2018-12-06T23:00:00.000Z',
    genre: 'Action, Comedy, Sci-Fi',
    director: 'Germán Magariños',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg',
    type: 'movie',
    createdBy: 123,
    createdAt: '2022-05-02T22:01:33.431Z',
    updatedAt: '2022-05-02T22:01:33.431Z'
  },
  {
    _id: 'd2397fa3-7a65-463a-9ddb-7de6b1ced1a4',
    deletedAt: null,
    deleted: false,
    title: 'Electra',
    released: '1962-10-23T23:00:00.000Z',
    genre: 'Drama',
    director: 'Michael Cacoyannis',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZjJjNzI4NzktZDQ2NS00ZmIxLTgxZDgtNGUwYWU1OGYxNDExXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg',
    type: 'movie',
    createdBy: 123,
    createdAt: '2022-05-02T22:02:20.026Z',
    updatedAt: '2022-05-02T22:02:20.026Z'
  },
  {
    _id: 'bf4d53e0-592b-45a0-a1eb-44bbc6485858',
    deletedAt: null,
    deleted: false,
    title: 'King Kong',
    released: '2005-12-13T23:00:00.000Z',
    genre: 'Action, Adventure, Drama',
    director: 'Peter Jackson',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    type: 'movie',
    createdBy: 123,
    createdAt: '2022-05-02T22:06:24.356Z',
    updatedAt: '2022-05-02T22:06:24.356Z'
  }
];

const allMovies = [createMovieData];

const allMoviesbyPremiumUser = [
  {
    data: allMovies,
    total: [{ total: allMovies.length }]
  }
];

const allMoviesbyBasicUser = [
  {
    data: allMoviesBasic,
    total: [{ total: allMoviesBasic.length }]
  }
];

module.exports = {
  mockMovieResponse,
  createMovieData,
  allMoviesbyPremiumUser,
  createMovieDataBasic,
  allMoviesBasic,
  allMoviesbyBasicUser
};
