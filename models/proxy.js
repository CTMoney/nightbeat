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
        }
    })
    return Proxy
}