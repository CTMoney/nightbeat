import React from 'react'


const Dashboard = (props) => {
  return (
    <>
      <h1 className="text-center">Dashboard</h1>
      <div style={{ border: "2px inset gray" }}>
        <table style={{ width: "100%" }}>
          <tr style={{ borderBottom: '1px inset gray' }}>
            <th className="text-center">ID</th>
            {/*   ^Font awesome shopiy Favicon */}
            <th className="text-center">Keywords</th>
            <th className="text-center">Profile</th>
            <th className="text-center">Retry</th>
            <th className="text-center">Monitor</th>
            <th className="text-center">Proxy</th>
            <th className="text-center">Status</th>
            <th className="text-center">Clock</th>
            <th className="text-center"><i className="fas fa-play-circle" style={{ color: 'green' }}></i>Toggle</th>
            <th className="text-center">Edit</th>
            <th className="text-center"><i className="fas fa-times-circle" style={{ color: 'red' }}></i>Delete</th>
          </tr>
          <tr>
            <td className="text-center">1</td>
            <td className="text-center">Jordan,1</td>
            <td className="text-center">Wells Fargo</td>
            <td className="text-center">800</td>
            <td className="text-center">800</td>
            <td className="text-center">usimportantd1.fogldn.com:13511</td>
            <td className="text-center">Running</td>
            <td className="text-center">Elapsed 14min</td>
            <td className="text-center"><i className="fas fa-play-circle" style={{ color: 'green' }}></i></td>
            <td className="text-center"><i className="fas fa-edit"></i></td>
            <td className="text-center"><i className="fas fa-times-circle" style={{ color: 'red' }}></i></td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Dashboard