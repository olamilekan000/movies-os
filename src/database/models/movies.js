const mongoose = require('mongoose');
const softDeletePlugin = require('../mongodb/plugins/soft-delete');
const {
  hashPasswordPlugin,
  changePasswordPlugin,
  comparePasswordPlugin
} = require('../mongodb/plugins/password');

const { Schema } = mongoose;

const MoviesSchema = new Schema(
  {
    _id: String,
    createdBy: Number,
    title: String,
    released: Date,
    genre: String,
    director: String,
    poster: String,
    type: { type: String, enum: ['movie', 'series', 'episode'] },
    deletedAt: { type: Date, default: null }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

softDeletePlugin(MoviesSchema);
hashPasswordPlugin(MoviesSchema);
changePasswordPlugin(MoviesSchema);
comparePasswordPlugin(MoviesSchema);

const MoviesModel = mongoose.model('Movies', MoviesSchema);

module.exports = MoviesModel;
