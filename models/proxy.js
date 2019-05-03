module.exports = (sequelize, DataTypes) => {
    const Proxy = sequelize.define("Proxy", {
        address: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    })
    return Proxy
}