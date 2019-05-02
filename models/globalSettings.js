module.exports = (sequelize, DataTypes) => {
    const Settings = sequelize.define("Settings", {
        global_monitor_delay: {
            type: DataTypes.INTEGER
        },
        global_retry_delay: {
            type: DataTypes.INTEGER
        },
        webhook: {
            type: DataTypes.STRING
        }
    })
    return Settings
}