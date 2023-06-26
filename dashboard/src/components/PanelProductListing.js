import React, { useEffect, useState } from 'react';

const ProductListPanel = () => {
  const [products, setProduct] = useState([])

  useEffect(() => {
    fetch('http://localhost:4060/api/products')
      .then(response => response.json())
      .then(data => setProduct(data.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <table>
        <thead>
          <h2>Listado de Productos Totales</h2>
          <tr>
            <th width="350px">Nombre:</th>
            <th width="350px">Categoria:</th>
            <th width="350px">Cantidad de Productos:</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={products.id}>
              <td>{product.nombre}</td>
              <td>{product.categoria.nombre}</td>
              <td>{product.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListPanel