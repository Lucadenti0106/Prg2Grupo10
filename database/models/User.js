module.exports = function (sequelize, dataTypes){

    let alias = 'User';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED,
            unique: true
        },
        email: {
            type: dataTypes.STRING(100),
            unique: true
        },
        nombre_usuario: {
            type: dataTypes.STRING(100),
            unique: true
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
        productos_agregados:{

            type: dataTypes.INTEGER,
            allowNull: false


        },
        foto_perfil:{
            type: dataTypes.STRING(255)
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName : "users",
        timestamps: true,
        underscored: true,
        paranoid: false
    };

    const User = sequelize.define(alias, cols, config);

    return User;

}