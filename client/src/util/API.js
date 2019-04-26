import axios from 'axios'

export default {

    registerAccount(email, username, password) {
        return axios.post("/create/submit", {email, username, password})
    }
    
}