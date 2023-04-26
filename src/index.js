const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const handlebars = require('express-handlebars').engine

const morgan = require('morgan')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./configs/db')

// Connect DB
db.connect()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))

// app.use(morgan("combined"))
// Template Engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: function (a, b) {
        return a + b
      },
    },
  })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Router Init
route(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
