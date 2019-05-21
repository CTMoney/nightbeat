module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    shop: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'No shop selected'
        }
      }
    },
    url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: false,
          msg: 'No url provided'
        }
      }
    },
    keywords: {

      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'No keywords provided'
        }
      }
    },
    amount: {
      type: DataTypes.STRING,
      defaultValue: 1
    },
    size: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'No size selected'
        }
      }
    },
    billingProfile: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'No billing profile selected'
        }
      }
    },
    // Dillon please let me know if this should
    //have a default value or if it should just fail
    //validation and request an input from user
    numberOfProxies: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please select number of proxies you wish this task to use'
        }
      }
    },
    proxyInput: {
      type: DataTypes.STRING
    },
    shop_password: {
      type: DataTypes.STRING
    },
    monitor_delay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1500
    },
    retry_delay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1500
    },
    profileName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please enter a profile name'
        }
      }
    },
    running: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    // associate: function (models) {
    //   Task.belongsTo(models.User, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   })
    // }
  })
  return Task
}
