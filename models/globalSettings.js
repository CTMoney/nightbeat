module.exports = (sequelize, DataTypes) => {
  const Settings = sequelize.define("Settings", {
    global_monitor_delay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1500
    },
    global_retry_delay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1500
    },
    webhook: {
      type: DataTypes.STRING
    },
  })

  Settings.associate = db => {
    Settings.belongsTo(db.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Settings
}