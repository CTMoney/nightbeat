import React from 'react'

const Settings = () => {
    return (
        <>
            <div className="container border p-5" style={{ borderTopLeftRadius: "20px" }}>
                <img className="col-3" src="https://picsum.photos/200" />
                <div className="col-2 float-right mt-5">
                    <button>Edit</button>
                </div>
                <div className="col-4 float-right" style={{ marginRight: '200px' }}>
                    <p className="display-4" style={{ fontSize: '40px' }}>Username</p>
                    <p className="lead">ShoeNerd42</p>
                    <p className="display-4" style={{ fontSize: '40px' }}>Email</p>
                    <p className="lead">ShoeNerd42@email.com</p>
                </div>
            </div>
            <div className="container mt-3">
                <h3 className="lead text-center">Enable Two Factor Authentication</h3>
                <button type="button" class="btn btn-primary btn-lg btn-block mx-auto" style={{ width: '60%' }}>Get Started</button>
            </div>
            <div className="container mt-5">
                <h1 className="display-4 mb-4">Global Delay</h1>
                <form>
                    <div className="form-group row">
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
            <div className="container mt-4">
            <h1 className="display-4">Generate Webhook</h1>
            <input class="form-control" type="text" placeholder="" name="webhook" value="" readonly></input>
            </div>
        </>
    )
}


export default Settings