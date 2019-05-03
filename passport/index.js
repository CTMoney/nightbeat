const passport = require('passport'),
  LocalStrategy = require('./localStrategy'),
  db = require('../models')


passport.serializeUser((user, done) => {
  console.log('*** serializeUser called')
  done(null, { _id: user._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
  console.log('DeserializeUser called')
  db.User.findOne({ where: { id: id }, attributes: ['username'] }).then((user, err) => {
    console.log(user)
    console.log('*** Deserialize user')
    done(null, user)
  })
})

//  Use Strategies 
passport.use(LocalStrategy)

module.exports = passport
