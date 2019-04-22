const express = require('express'),
  path = require('path'),
  db = require('./models'),
  PORT = process.env.PORT || 3001,
  app = express()

require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}


// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

require("./routes/create-account-routes")(app)

db.sequelize.sync({ force: true })
  .then(() => app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`)))
