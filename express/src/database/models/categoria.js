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

    categoria.associate = function(models){
        categoria.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "categoria_id"
        })
    }
    return categoria;
};
















/*Category.associate = function(models){
    Category.hasMany(models.Product,{
        as: "products", //Nombre de la relación
        foreignKey: "categoryId"
        })
    }*/