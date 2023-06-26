import React, { useEffect, useState } from 'react';

const UserDetailPanel = () => {
  const [users, setUsers] = useState([]);
  const lastUser = users[users.length - 1];

  useEffect(() => {
    fetch('http://localhost:4060/api/users')
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Último Usuario Creado</h2>
      {lastUser && (
        <table className='tablaPanelUltimateAccount'>
          <thead>
            <tr>
              <th>Nombre:</th>
              <th>Email:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{lastUser.nombre}</td>
              <td>{lastUser.email}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserDetailPanel;

/*import React, { useEffect, useState } from 'react';

const UserDetailPanel = () => {
  const [users, setUser] = useState([]);
  const lastUser = users[users.length -1]

  useEffect(() => {
    fetch('http://localhost:4060/api/users')
      .then(response => response.json())
      .then(data => setUser(data.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <table className='tablaPanelUltimateAccount'>
        <thead>
          <h2>Ultimo Usuario Creado</h2>
          <tr>
            <th>Nombre:</th>
            <th width="500px">Email:</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr>
              <td width="1000px">{lastUser.nombre}</td>
              <td width="-700px">{lastUser.email}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>

        </tfoot>
      </table>
    </div>
  );
};

export default UserDetailPanel
*/
