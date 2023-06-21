import ChartRow from './ChartRow';
import React from 'react';
import { DetailUserPanel } from './PanelUltimateAccount';
import { ProductListPanel } from './PanelProductListing';
import { ProductCategoryPanel } from './PanelCategoryProducts';

console.log(DetailUserPanel)
console.log(ProductListPanel)
console.log(ProductCategoryPanel)
//ultima cosa de la pagina
let tableRowsData = [
    {
        Name: 'Billy Elliot ',
        Surname: '123',
        Edad: '5',
        Email: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Name: 'Alicia en el país de las maravillas',
        Surname: '142',
        Edad: '4.8',
        Email: ['Drama', 'Acción', 'Comedia'],
        Awards: 3
    },
]

const categories = [
    { name: 'Categoría 1', totalProducts: 10 },
    { name: 'Categoría 2', totalProducts: 5 },
    { name: 'Categoría 3', totalProducts: 8 },
];

const productList = [
    {
        name: 'Producto 1',
        description: 'Descripcion 1',
        category: 'Categoría 1',
        creator: 'Creador del NFT',
        price: 'Precio 1',
    },
    {
        name: 'Producto 2',
        description: 'Descripcion 2',
        category: 'Categoría 2',
        creator: 'Creador del NFT',
        price: 'Precio 1'
    },
];

function Chart() {
    /*const [products, setProducts] = useState(0);

    useEffect(() => {
        //Api productos 
        const endpointProducts = "http://localhost:4060/api/products/";

        fetch(endpointProducts)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setProducts(data)
                }
            })
            .catch(error => console.log(error))
    })

    let tablaDeProductos = [{
        nombre: "hola",

    }];*/

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                        <h2>Listado de productos</h2>
                            <tr>
                            
                                <th>Nombre de Usuario</th>
                                <th>Apellido</th>
                                <th>Edad</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                             
                            <div>
                                
                                {productList.map((product) => (
                                    <div key={product.name}>
                                        <p>Nombre: {product.name}</p>
                                        <p>Categoría: {product.category}</p>
                                        <p>Fecha de creación: {product.creationDate}</p>
                                        <p>Estado: {product.status}</p>
                                    </div>
                                ))}
                            </div>
                        </tbody>
                        <tfoot>
                        </tfoot>
                    </table>
                    
                    <table className='CategoryProduct' id='tableProductCategory' width="100%" cellSpacing="9">
                        <thead>
                        <h2>Total de productos por categoría</h2>
                            <tr>
                                <th>Nombre</th>
                                <th>Productos Totales</th>
                            </tr>
                            <div>
                                
                                {categories.map((category) => (
                                    <p key={category.name}>
                                        {category.name}: {category.totalProducts}
                                    </p>
                                    
                                ))}
                            </div>
                        </thead>
                    </table>
                        
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>

    )
}
//* {tableRowsData.map((row, i) => {return <ChartRow {...row} key={i} />})}

export default Chart;