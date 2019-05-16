import React from 'react'
import API from '../../../util/API'
import './Settings.css'

class Settings extends React.Component {

    state = {
        monitor: '',
        retry: '',
        webhook: ''
    }

    handleInput = event => {
        event.preventDefault()
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSettings = (event) => {
        event.preventDefault()
        const { monitor, webhook, retry } = this.state
        API.task(monitor, webhook, retry)
    }

    render() {
        return (
            <>
                <div className="container border p-5" id='prof-container' style={{ borderTopLeftRadius: "20px" }}>
                    <div class='row'>
                        <img className="col-3" id='prof-img' src="https://picsum.photos/200" />
                        <div className="col-2 float-right mt-5">
                            <button><i class="fas fa-cog" id="settings-btn"></i></button>
                        </div>
                        <div className="col-4 float-right" style={{ marginRight: '200px' }}>
                            <p className="display-4" style={{ fontSize: '30px' }}>Username</p>
                            <p className="lead" style={{ fontSize: '15px' }}>ShoeNerd42</p>
                            <p className="display-4" style={{ fontSize: '30px' }}>Email</p>
                            <p className="lead" style={{ fontSize: '15px' }}>ShoeNerd42@email.com</p>
                        </div>
                    </div>
                </div>

                <div className="container mt-3" id="enable-authentication">
                    <h3 className="lead text-center">Enable Two Factor Authentication</h3>

                    <button type="button" id='my-button' style={{ width: '40%' }}>Get Started</button>
                </div>

                <div className="container mt-5" id="global-delay">
                    <h3 className="display-4 mb-4">Global Delay</h3>
                    <form onSubmit={this.handleSettings}>
                        <div className="form-group row" id="input-global">
                            <label htmlFor="monitor" className="col-sm-2 col-form-label">Monitor Delay:</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="monitor" name="monitor" placeholder="" />
                            </div>
                            <label htmlFor="retry" className="col-sm-2 col-form-label">Retry Delay:</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="retry" name="retry" placeholder="" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container mt-4" id="generate-web">
                    <button className="display-4" id='GWbutton'>Generate Webhook </button>
                    <input class="form-control" type="text" placeholder="Webhook Link Here" name="webhook" value="" readonly></input>
                </div>
            </>
        )
    }
}


export default Settings