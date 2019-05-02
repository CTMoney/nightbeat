const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    user_email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        max: [254]
      },
      unique: {
        args: true,
        msg: 'This email is already in use.'
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        //For explanation of regexp see: https://regex101.com/r/f5Jnp5/2
        is: /[a-zA-Z\d]/g,
        len: [1, 20],
      },
      unique: {
        args: true,
        msg: 'This username is already taken.'
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        is: {
          //For explanation of regexp see: https://regex101.com/r/f5Jnp5/1
          args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#!@#$%^&*()~`=+_])[A-Za-z\d!@#$%^&*()~`=+_]{8,128}$/g,
          msg: 'Please enter a password with atleast one of each: lowercase letter, uppercase letter, number, and special character'
        },
        max: 128
      }
    }
  })

  User.prototype.checkPassword = function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  }
  User.prototype.hashPassword = function (plainTextPassword) {
    return bcrypt.hashSync(plainTextPassword, 10)
  }

  User.afterValidate(user => {
    console.time('Validation & Hashing Completed: ')
    if (!user.password) {
      throw new Error('password is null or undefined')
    } else {
      user.password = user.hashPassword(user.password)
    }
    console.timeEnd('Validation & Hashing Completed: ')
  })

  return User
}
