import React from 'react';
import API from '../../../util/API'

class CreateTask extends React.Component {

    state = {
        sizes: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 16, 17, 18, 19],
        keywords: ''
    }

    handleInput = event => {
        event.preventDefault()
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
      }

      handleTask = (event) => {
        event.preventDefault()
        const { sizes, keywords } = this.state
        API.task(sizes, keywords)
      }

    render() {
        return (
            <form className="form-group mb-4" onSubmit={this.handleTask}>
                <div className="form-group">
                    <label htmlFor="shop">Shop:</label>
                    <select className="form-control" name="shop" id="shop">
                        <option>Populate w/ database of shops iguess</option>
                    </select>
                </div>
    
                <div className="form-group">
                    <label htmlFor="shop">Keywords:</label>
                    <input type="text" className="form-control" name="keywords" onChange={this.handleInput} placeholder="Separate, Values, By, Comma," />
                </div>
    
                <div className="form-group">
                    <label htmlFor="size">Size:</label>
                    <select className="form-control" name="size" id="size">
                        {this.state.sizes.map(size => <option>{size}</option>)}
                    </select>
                </div>
    
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" className="form-control" name="amount" id="amount" placeholder="No more than 50, greeder doge." />
                </div>
    
                <div className="form-group">
                    <label htmlFor="shipping">Shipping Group:</label>
                    <select className="form-control" name="shipping" id="shipping">
                        <option>ship</option>
                    </select>
                </div>
    
                <div className="form-group">
                    <label htmlFor="payment">Payment Profile:</label>
                    <select className="form-control" name="payment" id="payment">
                        <option>buy</option>
                    </select>
                </div>
    
                <div className="form-group">
                    <label htmlFor="numOfProxy"># of Proxies:</label>
                    <select className="form-control" name="numOfProxy" id="numOfProxy">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
    
                <label htmlFor="proxySelect">Proxy Select</label>
                <div className="input-group mb-5">
                    <select className="custom-select" id="proxySelect">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div className="input-group-append">
                        <button className="btn btn-outline-light" type="button">Add Proxy</button>
                    </div>
                </div>
    
                <div className="form-group">
                    <label htmlFor="shopPassword">Shop Password:</label>
                    <input type="password" className="form-control" id="shopPassword" placeholder="Password" />
                </div>
   
                <div className="form-group">
                    <label htmlFor="monitorDelay">Monitoring Delay:</label>
                    <input type="number" className="form-control" id="monitorDelay" placeholder="1000ms = 1s" />
                </div>
    
                <div className="form-group">
                    <label htmlFor="retryDelay">Retry Delay:</label>
                    <input type="number" className="form-control" id="retryDelay" placeholder="1000ms = 1s" />
                </div>
    
                <button type="submit" className="btn btn-outline-light float-right">Create Task</button>
            </form>
        )
    }
}
 
export default CreateTask



   