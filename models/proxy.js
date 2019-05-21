module.exports = (sequelize, DataTypes) => {
  const Proxy = sequelize.define("Proxy", {
    address: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'no proxy provided'
        }
      }
    },
    // associate: function (models) {
    //   Proxy.belongsTo(models.User, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   })
    // }
  })
  return Proxy
}