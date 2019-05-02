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
    }

}