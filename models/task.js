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
                    args: true,
                    msg: 'No url provided'
                }
            }
        },
        keywords: {
<<<<<<< HEAD
            type: DataTypes.STRING
=======

            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'No keywords provided'
                }
            }
>>>>>>> c471dd36d92313315b2159e2841a41f33301aeab
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
        shop_password: {
            type: DataTypes.STRING
        },
        monitor_delay: {
            type: DataTypes.INTEGER,
            defaultValue: 1500
        },
        retry_delay: {
            type: DataTypes.INTEGER,
            defaultValue: 1500
        }
    })
    return Task
}