import React, { useEffect, useState } from 'react';

const ProductListPanel = ({ products }) => {
  const [product, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:4060/api/products/")
    console.log(data)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (data) {
          setProducts(data)
        }
      })
  }, [])
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {product.map(product => {
            return (
              <ul>
                <tr key={product.id}>
                  <td>{product.nombre}</td>
                  <td>{product.descripcion}</td>
                  <td>{product.categoria}</td>
                </tr>
              </ul>
            )
          })}
          <ul>
            {product.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </tbody>
      </table>
    </div>
  );
};

const ListProductPanel = [
  {
    Nombre: "Estrellas",
    Descripcion: "descripzion :p",
    Categotria: ""
  }
]
console.log(ListProductPanel)
export { ProductListPanel };