module.exports = (sequelize, DataTypes) => {
    const Settings = sequelize.define("Settings", {
        global_monitor_delay: {
            type: DataTypes.INTEGER,
            defaultValue: 1500
        },
        global_retry_delay: {
            type: DataTypes.INTEGER,
            defaultValue: 1500
        },
        webhook: {
            type: DataTypes.STRING
        }
    }, {
            classMethods: {
                associate(models) {
                    Settings.belongsTo(models.User, { where: { username: username } })
                }
            }

        })

    return Settings
}