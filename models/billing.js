module.exports = (sequelize, DataTypes) => {
    const Billing = sequelize.define("Billing", {
        fullName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        zip: {
            type: DataTypes.INTEGER
        },
        ccn: {
            type: DataTypes.INTEGER
        },
        cvv: {
            type: DataTypes.INTEGER
        },
        expiry_month: {
            type: DataTypes.STRING
        },
        expiry_year: {
            type: DataTypes.STRING
        },
        profile_name: {
            type: DataTypes.STRING
        }
        
        
    })
    return Billing
}