import axios from 'axios'
import { userInfo } from 'os';

export default {

    register(email, username, password, handleRedirect) {
        return axios.post("/register/submit", { email, username, password })
            .then(res => {
                handleRedirect('/login')
            })
    },

    login(username, password, handleRedirect) {
        return axios.post('/user/login', { username, password })
            .then(response => {
                console.log(`login response: ${response}`)
                if (response.status === 200) {
                    console.log(`response: ${response.status}`)
                } else {
                    throw new Error(response.status)
                }
            })
            .catch(err => console.log(`Error with logging in: \n ${err}`))
    },

    proxy(proxy, user) {
        return axios.post('/proxy/submit', { proxy }) 
         .then(res => {
             if (res.status === 200) {
                 console.log("Proxy Added")
             }
         })
    },

    profile(fullName, email, address, city, state, zip, cardname, cardnumber, expmonth, expyear, cvv, profileName) {
        return axios.post('/billing/submit', {fullName, email, address, city, state, zip, cardname, cardnumber, expmonth, expyear, cvv, profileName})
         .then(res => {
             if (res.status === 200) {
                 console.log("Billing Added")
             }
         })
    },

    settings(monitor_delay, retry_delay) {
        return axios.put('settings/update', {monitor_delay, retry_delay})
        .then(res => {
            if (res.status === 200) {
                console.log('Settings updated')
            }
        })
    }

}