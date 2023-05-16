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
        descripcion:{
            type: DataTypes.STRING(100)
        },
        imagen: {
            type: DataTypes.STRING(10),
        },
        precio: {
            type: DataTypes.STRING(15),
        },
        categoria:{
            type: DataTypes.STRING(15),
        }
    }
    let config = {
        tableName: 'productos',
        timestamps: false
    }
    const producto = sequelize.define('Producto', columna, config);
    return producto;
};