require('dotenv').config()
const express = require('express'),
  path = require('path'),
  db = require('./models'),
  PORT = process.env.PORT || 3001,
  app = express(),
  morgan = require('morgan'),
  session = require('express-session'),
  passport = require('./passport'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  SequelizeStore = require('connect-session-sequelize')(session.Store)

app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const myStore = new SequelizeStore({
  db: db.sequelize
});

app.use(
  session({
    store: myStore,
    //pick a random string to make the hash that is generated secure
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
)

app.use(passport.initialize())
app.use(passport.session())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

require("./routes")(app)

db.sequelize.sync({ force: true })
  .then(() => app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`)))
