import React, { useEffect, useState } from 'react';

const UserDetailPanel = () => {
  const [user, setUser] = useState([]);

  /*useEffect(() => {
    
    const fetchUser = async () => {
      try {
        let response = await fetch('http://localhost:4060/api/users');
        let data = await response.json();
        console.log(data)
        setUser(data);
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchUser();
  }, [userId]);
  */

  /*const UserFetch = async () => {
    const [user, setUser] = useState([])
    useEffect(() => {
      consumoApi()
    }, [])
    const consumoApi = async() => {
      const data = await fetch("http://localhost:4060/api/users")
      const dataJson = await data.json()
      setUser(dataJson)
    }
  }

  if (!user) {
    return <div>Cargando...</div>;
  }
  */
  useEffect(() => {
    fetch("http://localhost:4060/api/users")
      .then((response) => {
        return response.json()
      })
      .then((user) => {
        setUser(user)
      })
  }, [])

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.nombre}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
const DetailUserPanel = [
  {
    Nombre: "Pablo",
    Email: "pacopablo@gmail.com",
  },
  {
    Nombre: "Pepe",
    Email: "pepote135@gmail.com",
  },
  {
    Nombre: "Carlos",
    Email: "carlitos165@gmail.com",
  },
]
console.log(DetailUserPanel)
export { DetailUserPanel }
export { UserDetailPanel }
/*return (
  <div>
    <table className='detailUserPanel'>
      <h2>Detalle del Usuario</h2>
      <p><strong>nombre:</strong> {user.name}</p>
      <p><strong>email:</strong> {user.email}</p>
      { }
    </table>
  </div>
);
}
*/


