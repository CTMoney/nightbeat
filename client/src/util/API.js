import axios from 'axios'

export default {

    register(email, username, password, handleRedirect) {
        return axios.post("/register/submit", { email, username, password })
            .then(res => {
                handleRedirect('/login')
            })
    },

    login(username, password, handleRedirect, props) {
        return axios.post('/user/login', { username, password })
            .then(res => {
                console.log(`login response: ${res}`)
                if (res.status === 200) {
                    props.updateUser({
                        loggedIn: true,
                        username: Response.data.username
                    })
                }
                handleRedirect('/')
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