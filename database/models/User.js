module.exports = function (sequelize, dataTypes){

    let alias = 'User';

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
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
        deletedAt:{
            type: dataTypes.DATE
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