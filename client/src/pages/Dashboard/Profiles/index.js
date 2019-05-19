import React from 'react'
import API from '../../../util/API'
import './Profiles.css';

const Profiles = (props) => {

  const [billingForm, setBillingForm] = React.useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
    profileName: ''
  })

  let { fullName, email, address, city, state, zip, cardName, cardNumber, expMonth, expYear, cvv, profileName } = billingForm

  const handleInput = event => {
    setBillingForm({
      ...billingForm, [event.target.name]: event.target.value
    })
  }

  const handleProfile = (event) => {
    event.preventDefault()
    API.profile(fullName, email, address, city, state, zip, cardName, cardNumber, expMonth, expYear, cvv, profileName)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="row">
      <div className="col-75">
        <div className="container">
          <form onSubmit={handleProfile}>
            <div className="row">
              <div className="col-50" id="left">
                <h3>Billing Address</h3>
                <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                <input type="text" name="fullName" placeholder="John M. Doe" value={fullName} onChange={handleInput} />
                <label for="email"><i className="fa fa-envelope"></i> Email</label>
                <input type="text" name="email" placeholder="john@example.com" value={email} onChange={handleInput} />
                <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                <input type="text" name="address" placeholder="542 W. 15th Street" value={address} onChange={handleInput} />
                <label for="city"><i className="fa fa-institution"></i> City</label>
                <input type="text" name="city" placeholder="New York" value={city} onChange={handleInput} />

                <div className="row">
                  <div className="col-50">
                    <label for="state">State</label>
                    <input type="text" name="state" placeholder="NY" value={state} onChange={handleInput} />
                  </div>
                  <div className="col-50">
                    <label for="zip">Zip</label>
                    <input type="text" name="zip" placeholder="10001" value={zip} onChange={handleInput} />
                  </div>
                </div>
              </div>

              <div className="col-50" id="right">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div className="icon-container">
                  <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                  <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                  <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                  <i className="fa fa-cc-discover" style={{ color: "orange" }}></i>
                </div>
                <label for="cname">Name on Card</label>
                <input type="text" name="cardName" placeholder="John More Doe" value={cardName} onChange={handleInput} />
                <label for="ccnum">Credit card number</label>
                <input type="text" name="cardNumber" placeholder="1111-2222-3333-4444" value={cardNumber} onChange={handleInput} />
                <label for="expmonth">Exp Month</label>
                <input type="text" name="expMonth" placeholder="September" value={expMonth} onChange={handleInput} />

                <div className="row">
                  <div className="col-50">
                    <label for="expYear">Exp Year</label>
                    <input type="text" name="expyear" placeholder="2018" value={expYear} onChange={handleInput} />
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" name="cvv" placeholder="352" value={cvv} onChange={handleInput} />
                    <button type="button" className="btn btn-success">+New Fake</button>
                  </div>
                </div>
                <input type="text" name="profileName" placeholder="Profile Name" value={profileName} onChange={handleInput} />
              </div>
            </div>
          </form>
          <button type="submit" class="btn btn-success">Save Profile!</button>
        </div>
      </div>
    </div>
  )

}

export default Profiles