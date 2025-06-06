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
        imagen_producto: { 
            type: dataTypes.TEXT, 
            allowNull: false
        },
        nombre_producto: {
            type: dataTypes.STRING(50), 
            allowNull: false
        },
        descripcion: { 
            type: dataTypes.TEXT,
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
        tableName: "productos", // Corrected table name to match SQL
        timestamps: true,
        underscored: true
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            as: 'usuario',
            foreignKey: 'id_usuario'
        });

        Product.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'id_producto'
        });
    }

    return Product;
};