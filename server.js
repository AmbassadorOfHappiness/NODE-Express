const express = require('express');
const morgan = require('morgan');
// const chalk = require('chalk');
const mongoose = require('mongoose');
require('dotenv').config();
const methodOverride = require('method-override');
const createPath = require('./helpers/create-path');
const postRoutes = require('./routes/post-routes');
const contactRoutes = require('./routes/contact-routes');
const postApiRoutes = require('./routes/api-post-routes');

// const errorMsg = chalk.bgKeyword('white').redBright;
// const successMsg = chalk.bgKeyword('green').white;

const app = express();
app.set('view engine', 'ejs');


mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));

app.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port ${process.env.PORT}`);
});

app.use(express.urlencoded({ extended: false }));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.static('styles')); //---ДОСТУП К ПОДКЛЮЧЕНИЮ СТИЛЕЙ

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), {title});
}); 

app.use(postRoutes);
app.use(contactRoutes);
app.use(postApiRoutes);

app.use((req, res) => {
  const title = 'Error page';
  res
    .status(404)
    .render(createPath('error'), { title });
}); //---ВСЕ ЧТО ПОСЛЕ USE НЕ ИДЕТ В ОБРАБОТКУ
