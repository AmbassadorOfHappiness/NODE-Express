const mongoose = require('mongoose');
const Schema = mongoose.Schema; //---КОНСТРУКТОР

const postSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema); //---СОЗДАНИЕ МОДЕЛИ
module.exports = Post;