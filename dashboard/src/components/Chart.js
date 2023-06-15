import ChartRow from './ChartRow';
import React from 'react';


//ultima cosa de la pagina
let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama', 'Acción', 'Comedia'],
        Awards: 3
    },

]


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
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableRowsData.map((row, i) => {
                                    return <ChartRow {...row} key={i} />
                                })
                            }

                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>

                        </tfoot>

                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;