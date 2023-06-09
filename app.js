require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'resources/views');

app.use(express.urlencoded({extended: true}));

const webRouter = require('./routes/web');

app.use('/', webRouter);
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});