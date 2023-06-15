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
        categoria_id:{
            type: DataTypes.STRING(15),
        }
    }
    let config = {
        tableName: 'productos',
        timestamps: false
    }
    const producto = sequelize.define('Producto', columna, config);

    producto.associate = function(models){
        producto.belongsTo(models.Categoria,{
            as:"categoria",
            foreignKey:"categoria_id"
        })
    }
    return producto;
};








    /*Product.belongsTo(models.Category,{
        as: "category", //Nombre de la relación
        foreignKey: "categoryId"
        })
    }









Category.associate = function(models){
    Category.hasMany(models.Product,{
        as: "products", //Nombre de la relación
        foreignKey: "categoryId"
        })
    }*/