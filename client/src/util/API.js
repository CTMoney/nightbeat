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
    }

}