import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';




function ContentRowMovies() {
    const [products, setProducts] = useState(0);
    const [users, setUsers] = useState(0);
    const [categorias,setCategorias] = useState(0);

    useEffect(() => {
        //Api productos 
        const endpointProducts = "http://localhost:4060/api/products/";

        //Api usuarios 
        const endpointUsers = "http://localhost:4060/api/users";

        const endpointCategorias = "http://localhost:4060/api/categorias";

        fetch(endpointCategorias)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setCategorias(data.meta.count);
                }
            })
            .catch(error => console.log(error))

        //fetch de usuarios
        fetch(endpointUsers)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setUsers(data.meta.count);
                }
            })
            .catch(error => console.log(error))



        //fecth de productos
        fetch(endpointProducts)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setProducts(data.meta.count)
                }
            })
            .catch(error => console.log(error))
    })


    let totalProductos = {
        title: 'Total de Productos',
        color: 'black',
        cuantity: products,
        
    }

    let totalUsuarios = {
        title: 'Total de Usuarios',
        color: 'black',
        cuantity: users,
        icon: 'fa-user-check'
    }

    let totalCategorias = {
        title: ' Total de Categorias',
        color: 'black',
        cuantity: categorias,
        
    }

    let cartProps = [totalProductos, totalCategorias, totalUsuarios];

    return (

        <div className="row">

            {cartProps.map((movie, i) => {

                return <SmallCard {...movie} key={i} />

            })}

        </div>
    )
}

export default ContentRowMovies;