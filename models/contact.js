const mongoose = require('mongoose');
const Schema = mongoose.Schema; //---КОНСТРУКТОР

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema); //---СОЗДАНИЕ МОДЕЛИ
module.exports = Contact;