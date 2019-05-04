import React from 'react'
import API from '../../../util/API'
import ProxyTable from '../../../components/ProxyTable'

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

      handleProfile = (event) => {
        event.preventDefault()
        const { firstname, email, address, city, state, zip, cardname, cardnumber, expmonth, expyear, cvv } = this.state
        API.task(firstname, email, address, city, state, zip, cardname, cardnumber, expmonth, expyear, cvv)
      }

    render() {
        return (
        <>
            <p className="display-4 mt-0">Proxy</p>
            <div className="proxy-container">
                <form className="form-inline">
                    <input className="form-control mb-2 mr-sm-2" placeholder="Input Proxy" style={{ minWidth: "200px" }} type="text" name="proxy"/>
                    <button type="submit" className="btn btn-primary mb-2 mr-sm-2">submit</button>
                </form> 
                
            
<ProxyTable/>
            </div>
        </>
    )}
}

export default Proxies