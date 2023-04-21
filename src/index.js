const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars').engine;

const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(morgan("combined"));
// Template Engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Router Init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});