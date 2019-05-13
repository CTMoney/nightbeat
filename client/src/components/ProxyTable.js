import React from 'react';
import { Table } from 'reactstrap';



export default class ProxyTable extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Proxy</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Response Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>usimportantd1.fogldn.com:11743</td>
            <td>Name</td>
            <td>gunga :D</td>
            <td>700ms</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
