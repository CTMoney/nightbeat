const db = require('../models'),
  LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
  function (username, password, done) {
    db.User.findOne({ where: { username: username } }).then((user, err) => {
      if (err) {
        console.log(err)
        return done(err)
      }
      if (!user) {
        console.log('no user')
        return done(null, false, { message: 'Incorrect username' })
      }
      if (!user.checkPassword(password)) {
        console.log('wrong pass')
        return done(null, false, { message: 'Incorrect password' })
      }
      console.log('user')
      return done(null, user)
    })
  }
)

module.exports = strategy
