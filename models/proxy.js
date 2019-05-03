module.exports = (sequelize, DataTypes) => {
    const Proxy = sequelize.define("Proxy", {
        address: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'no proxy provided'
                }
            }
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