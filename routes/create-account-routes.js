const db = require('../models')

module.exports = app => {

  app.post("/create/submit", (req, res) => {

    const { username, email, password } = req.body;
    db.User.create({ "user_name": username, 'user_email': email, 'user_pass': password })
      .then((dbUser) => { res.json(dbUser) })
      .catch(err => console.log(err))

  })

} 