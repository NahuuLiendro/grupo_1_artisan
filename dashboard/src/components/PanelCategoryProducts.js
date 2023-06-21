import React, { useEffect, useState } from 'react';

const ProductCategoryPanel = ({ products }) => {
  
  return (
    <div>
      <table>
        <h2>Listado de Productos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <p>Nombre{product.name}</p>
              <p>Descripcion:{product.description}</p>
              <p>Categoria {product.p}</p>
            </li>
          ))}
        </ul>
      </table>
    </div>
  );
};

const CategoryProductPanel = [
  {
    Nombre: "",
    Categoria: "",
  }
]
console.log(CategoryProductPanel)
export { ProductCategoryPanel };