const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017')
let User = null
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  const userSchema = mongoose.Schema({
    email: String,
    password: String
  })
  User = mongoose.model('User', userSchema)
})

module.exports = (app) => {
  app.post('/users', (req, res) => {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password
    })
    newUser.save((err, newUser) => {
      if (err) return console.error(err)
      console.log('user added to db', newUser)
    })
    res.send({
      message: `${req.body.email}, you have been registered!`
    })
  })

  app.get('/users', (req, res) => {
    User.find({}).lean().exec((err, users) => {
      console.error('err', err)
      res.send({
        message: users
      })
    })
  })
}
