module.exports = (sequelize, DataTypes) => {
    let columna = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(30)
        },
        apellido:{
            type: DataTypes.STRING(30)
        },
        email: {
            type: DataTypes.STRING(40),
            unique: true
        },
        clave: {
            type: DataTypes.STRING(255),
        },
        foto:{
            type: DataTypes.STRING(10),
        }
    }
    let config = {
        tableName: 'usuarios',
        timestamps: false
    }
    const User = sequelize.define('Usuario', columna, config);
    return User;
};
