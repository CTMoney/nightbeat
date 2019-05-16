import React from 'react';
import API from '../../../util/API'

const CreateTask = props => {

  let [taskForm, setTaskForm] = React.useState({
    shop: '',
    url: '',
    size: '',
    keywords: '',
    amount: '',
    billingProfile: '',
    numberOfProxies: '',
    proxyInput: '',
    shopPassword: '',
    monitorDelay: '',
    retryDelay: '',
    profileName: ''
  })
  let { shop, url, size, keywords, amount, billingProfile, numberOfProxies, proxyInput, shopPassword, monitorDelay, retryDelay, profileName } = taskForm
  const handleInput = (event) => {
    setTaskForm({
      ...taskForm, [event.target.name]: event.target.value
    })
  }
  const handleTask = (event) => {
    event.preventDefault()

    API.task(
      shop, url, size, keywords, amount,
      billingProfile, numberOfProxies, proxyInput,
      shopPassword, monitorDelay, retryDelay, profileName
    )
      .then(res => {
        console.log('task successfully created')
        console.log(res)
      })
  }

  return (
    <form className="form-group mb-4" onSubmit={handleTask}>

      {/* profileName */}
      <div className="form-group">
        <label htmlFor="profileName">profile name:</label>
        <input type="text" className="form-control" name="profileName" onChange={handleInput} />
      </div>

      {/* shop */}
      <div className="form-group">
        <label htmlFor="shop">Shop:</label>
        <select className="form-control" name="shop">
          <option>Shopify</option>
          <option>Nike</option>
          <option>Adidas</option>
        </select>
      </div>

      {/* url */}
      <div className="form-group">
        <label htmlFor="url">custom url:</label>
        <input type="text" className="form-control" name="url" onChange={handleInput} />
      </div>

      {/* keywords */}
      <div className="form-group">
        <label htmlFor="shop">Keywords:</label>
        <input type="text" className="form-control" name="keywords" onChange={handleInput} placeholder="Separate, Values, By, Comma," />
      </div>

      {/* size */}
      <div className="form-group">
        <label htmlFor="size">Size:</label>
        <select className="form-control" name="size" id="size">
          <option>3</option>
        </select>
      </div>

      {/* amount */}
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input type="number" className="form-control" name="amount" />
      </div>

      {/* billingProfiles */}
      <div className="form-group">
        <label htmlFor="billingProfiles">Payment Profile:</label>
        <select className="form-control" name="billingProfiles">
          <option>buy</option>
        </select>
      </div>

      {/* numberOfProxies */}
      <div className="form-group">
        <label htmlFor="numberOfProxies"># of Proxies:</label>
        <input type="number" className="form-control" name="numberOfProxies" />
      </div>

      {/* proxyInput */}
      <div className="form-group">
        <label htmlFor="proxyInput">Proxy Select</label>
        <input type="text" className="form-control" name="proxyInput" />
      </div>

      {/* shopPassword */}
      <div className="form-group">
        <label htmlFor="shopPassword">Shop Password:</label>
        <input type="password" className="form-control" name="shopPassword" />
      </div>

      {/* monitorDelay */}
      <div className="form-group">
        <label htmlFor="monitorDelay">Monitoring Delay (MS):</label>
        <input type="number" className="form-control" name="monitorDelay" />
      </div>

      {/* retryDelay */}
      <div className="form-group">
        <label htmlFor="retryDelay">Retry Delay (MS):</label>
        <input type="number" className="form-control" name="retryDelay" />
      </div>

      <button type="submit" className="btn btn-outline-light float-right">Submit Task</button>
    </form>
  )
}

export default CreateTask


