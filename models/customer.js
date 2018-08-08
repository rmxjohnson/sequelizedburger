
module.exports = function (sequelize, DataTypes) {

    var Customer = sequelize.define("Customer", {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    // BurgerId created as a foreign key
    Customer.associate = function (models) {
        Customer.belongsTo(models.Burger, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    //return the Customer after defining
    return Customer;
};



