import React from 'react'

const Dashboard = () => {
    return ( 
    <>
    <h1>Dashboard</h1> 
    <div style={{border: "5px solid white" }}>
        <table style={{width: "100%"}}>
  <tr>
    <th>ID</th>
    {/*   ^Font awesome shopiy Favicon */}
    <th>Keywords</th> 
    <th>Profile</th>
    <th>Retry</th>
    <th>Monitor</th>
    <th>Proxy</th>
    <th>Status</th>
    <th>Clock</th>
    <th>Start</th>
    <th>Stop</th>
    <th>Delete</th>
    <th>Edit</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Jordan,1</td> 
    <td>Wells Fargo</td>
    <td>800</td>
    <td>800</td>
    <td>usimportantd1.fogldn.com:13511</td>
    <td>Running</td>
    <td>Elapsed 14min</td>
    <td>Btn</td>
    <td>Btn</td>
    <td>Btn</td>
    <td>Btn</td>
  </tr>
  <tr>
    <td></td>
    <td></td> 
    <td></td>
  </tr>
</table>
</div>
    
    <button type="button" className="btn btn-success btn-sm">Start All</button>
    <button type="button" className="btn btn-danger btn-sm">Stop All</button>
    <button type="button" className="btn btn-danger btn-sm">Delete All</button>

    </>
    )
}
 
export default Dashboard