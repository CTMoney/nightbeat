module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("Task", {
        url: {
            type: DataTypes.STRING
        },
        keywords: {
            type: DataTypes.STRING
        },
        size: {
            type: DataTypes.INTEGER
        },
        shop_password: {
            type: DataTypes.STRING
        },
        monitor_delay: {
            type: DataTypes.INTEGER
        },
        retry_delay: {
            type: DataTypes.INTEGER
        },
    })
    return Task
}