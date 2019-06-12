module.exports = (sequelize, DataTypes) => {
  const Proxyz = sequelize.define("Proxyz", {
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
  })

  Proxyz.associate = db => {
    Proxyz.belongsTo(db.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Proxyz
}