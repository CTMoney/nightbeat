import React from 'react'
import API from '../../../util/API'
import ProxyTable from '../../../components/ProxyTable'


class Proxies extends React.Component {

    state = {
        proxy: [],
    }

    handleInput = event => {
        event.preventDefault()
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
      }


      handleProxy = (event) => {
        event.preventDefault()
        const { proxy } = this.state
        console.time("proxy creation")
        proxy.forEach((url) => {
            API.proxy(url) 
        })
        console.timeEnd("proxy creation")
      }

    render() {
        return (
        <>
            <p className="display-4 mt-0">Proxy</p>

            <div>
                <form className="form-inline" onSubmit={this.handleProxy}>

                    <input className="form-control mb-2 mr-sm-2" placeholder="Input Proxy" style={{ minWidth: "200px" }} type="text" name="proxy"/>
                    <button type="submit" className="btn btn-primary mb-2 mr-sm-2">submit</button>
                </form> 
            
                <ProxyTable/>
            </div>
        </>
    )}
}

export default Proxies
