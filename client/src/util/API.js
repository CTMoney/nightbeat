import axios from 'axios'

export default {

  register(email, username, password) {
    return axios.post("/register/submit", { email, username, password })
  },

  login(username, password) {
    console.log('Getting to the login');
    return axios.post('/user/login', { username, password })
  },

  task(
    shop, url, size, keywords, amount,
    billingProfile, numberOfProxies, proxyInput,
    shopPassword, monitorDelay, retryDelay, profileName) {
    return axios.post('/task/submit', {
      shop, url, size, keywords, amount,
      billingProfile, numberOfProxies, proxyInput,
      shopPassword, monitorDelay, retryDelay, profileName
    })
  },

  proxy(proxy, user) {
    return axios.post('/proxy/submit', { proxy })
  },

  profile(fullName, email, address, city, state, zip, cardname, cardnumber, expmonth, expyear, cvv, profileName) {
    return axios.post('/billing/submit', { fullName, email, address, city, state, zip, cardname, cardnumber, expmonth, expyear, cvv, profileName })
  },

  settings(monitor_delay, retry_delay) {
    return axios.put('settings/update', { monitor_delay, retry_delay })
  }

}