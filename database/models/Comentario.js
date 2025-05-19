module.exports = function (sequelize, dataTypes) {

    let alias = 'Comentario';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        comentario: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        id_producto: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true 
        },
        id_usuario: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true 
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
        tableName: "comentarios",
        timestamps: true,
        underscored: true
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models) {
        Comentario.belongsTo(models.User, {
            foreignKey: 'id_usuario'
        });
    };
    
    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Product, {
            foreignKey: 'id_producto'
        });
    };

    return Comentario;
};