import axios from 'axios'

export default {

    registerAccount(email, username, password) {
        return axios.post("/register/submit", { email, username, password })
    }

}