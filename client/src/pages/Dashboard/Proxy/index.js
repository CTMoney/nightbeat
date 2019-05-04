import React from 'react'
import API from '../../../util/API'
<<<<<<< HEAD
import ProxyTable from '../../../components/ProxyTable'
=======
>>>>>>> c471dd36d92313315b2159e2841a41f33301aeab

class Proxies extends React.Component {

    state = {
        proxy: '',
        username: '',
        password: '',
    }

    handleInput = event => {
        event.preventDefault()
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
      }

<<<<<<< HEAD
      handleProfile = (event) => {
=======
      handleProxy = (event) => {
>>>>>>> c471dd36d92313315b2159e2841a41f33301aeab
        event.preventDefault()
        const { firstname, email, address, city, state, zip, cardname, cardnumber, expmonth, expyear, cvv } = this.state
        API.task(firstname, email, address, city, state, zip, cardname, cardnumber, expmonth, expyear, cvv)
      }

    render() {
        return (
        <>
            <p className="display-4 mt-0">Proxy</p>
<<<<<<< HEAD
            <div className="proxy-container">
                <form className="form-inline">
=======
            <div>
                <form className="form-inline" onSubmit={this.handleProxy}>
>>>>>>> c471dd36d92313315b2159e2841a41f33301aeab
                    <input className="form-control mb-2 mr-sm-2" placeholder="Input Proxy" style={{ minWidth: "200px" }} type="text" name="proxy"/>
                    <button type="submit" className="btn btn-primary mb-2 mr-sm-2">submit</button>
                </form> 
                
<<<<<<< HEAD
            
<ProxyTable/>
=======
                <table className="table table-borderless table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col"><input className="form-check-input" type="checkbox" value="" id="checkAll" />checkbox</th>
                            <th scope="col">ID</th>
                            <th scope="col">Proxy</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">Response Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> </th>
                            <th>1</th>
                            <td>usimportantd1.fogldn.com:11743</td>
                            <td>Name</td>
                            <td>gunga :D</td>
                            <td>700ms</td>
                        </tr>
                    </tbody>
                </table>
                <form className="form-inline" onSubmit={this.handleProxy}>
                    <input className="form-control mb-2 mr-sm-2" type="text" style={{ minWidth: "400px" }} placeholder="Delete those with response time slow than.."></input>
                    <button className="btn btn-primary mb-2 mr-sm-2">submit</button>
                    <button className="btn btn-danger mb-2 mr-sm-2">Test Proxies</button>
                </form>

>>>>>>> c471dd36d92313315b2159e2841a41f33301aeab
            </div>
        </>
    )}
}

export default Proxies