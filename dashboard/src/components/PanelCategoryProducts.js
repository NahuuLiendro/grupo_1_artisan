import React, { useEffect, useState } from 'react';

const ProductCategoryPanel = () => {
  const [categorias, setCategoria] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4060/api/categorias')
      .then(response => response.json())
      .then(data => setCategoria(data.data))
      .catch(error => console.log(error))
  }, [])
  console.log(categorias)

  return (
    <div>
      <table>
        <thead>
          <h2>Listado de Categorias</h2>
          <tr>
            <th>Nombre de Categoria:</th>
            <th>Cantidad de Productos por Categoria:</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(categoria => (
            <tr key={categorias.id}>
              <td>{categoria.nombre}</td>
              <td>{categoria.productos.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCategoryPanel