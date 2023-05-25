module.exports = (sequelize, DataTypes) => {
    let columna = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(30)
        }
    }
    let config = {
        tableName: 'categorias',
        timestamps: false
    }
    const categoria = sequelize.define('Categoria', columna, config);
    return categoria;
};