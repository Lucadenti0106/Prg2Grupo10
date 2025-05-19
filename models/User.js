module.exports = function (sequelize, dataTypes){

    let alias = 'User'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        email: {
            type: dataTypes.STRING(100)
        },
        usuario: {
            type: dataTypes.STRING(100)
        },
        contrasenia: {
            type: dataTypes.STRING(255)
        },
        fecha_nacimiento:{
            type: dataTypes.DATE
        },
        dni:{
            type: dataTypes.INTEGER
        },
        foto_perfil:{
            type: dataTypes.STRING(255)
        },
        createdAt:{
            type: dataTypes.timestamps
        },
        updatedAt:{
            type: dataTypes.timestamps
        },
        deletedAt:{
            type: dataTypes.timestamps
        }
    }

    let config = {
        tableName : "users",
        timestamps:true,
        underscored: true,
    };

    const User = sequelize.define(alias, cols, config);

    return User;

}