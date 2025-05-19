module.exports = function (sequelize, dataTypes) {

    let alias = 'Product';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        id_usuario: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        nombre_producto: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: "products",
        timestamps: true,
        underscored: true
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            foreignKey: 'id_usuario'
        });
    };

    return Product;
};