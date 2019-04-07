import React, { Component } from 'react';


class Form extends Component {
    state = {
        sizes: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 16, 17, 18, 19]
    }

    render() {
        return (
            <div className="container">
                <label className="display-4 mt-3">NightBeat</label>
                <div className="jumbotron text-white bg-dark shadow">
                    <form className="form-group mb-4">
                        <div className="form-group">
                            <label htmlFor="shop">Shop:</label>
                            <select className="form-control" name="shop" id="shop">
                                <option>Populate w/ database of shops iguess</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="shop">Keywords:</label>
                            <input type="text" className="form-control" name="keyword" id="keyword" placeholder="Separate, Values, By, Comma," />
                        </div>

                        <div className="form-group">
                            <label htmlFor="size">Size:</label>
                            <select className="form-control" name="size" id="size">
                                {this.state.sizes.map(size => <option>{size}</option>)}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="amount">Amount:</label>
                            <input type="number" className="form-control" name="amount" id="amount" placeholder="No more than 50, greeder doge." />
                        </div>

                        <div className="form-group">
                            <label htmlFor="shipping">Shipping Group:</label>
                            <select className="form-control" name="shipping" id="shipping">
                                <option>ship</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="payment">Payment Profile:</label>
                            <select className="form-control" name="payment" id="payment">
                                <option>buy</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="numOfProxy"># of Proxies:</label>
                            <select className="form-control" name="numOfProxy" id="numOfProxy">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>

                        <label htmlFor="proxySelect">Proxy Select</label>
                        <div class="input-group mb-5">
                            <select class="custom-select" id="proxySelect">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div class="input-group-append">
                                <button class="btn btn-outline-light" type="button">Add Proxy</button>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="shopPassword">Shop Password:</label>
                            <input type="password" class="form-control" id="shopPassword" placeholder="Password" />
                        </div>

                        <div class="form-group">
                            <label for="shopDelay">Shop Delay:</label>
                            <input type="number" class="form-control" id="shopDelay" placeholder="1000ms = 1s" />
                        </div>

                        <div class="form-group">
                            <label for="monitorDelay">Monitoring Delay:</label>
                            <input type="number" class="form-control" id="monitorDelay" placeholder="1000ms = 1s" />
                        </div>

                        <div class="form-group">
                            <label for="purchaseDelay">Purchase Delay:</label>
                            <input type="number" class="form-control" id="purchaseDelay" placeholder="1000ms = 1s" />
                        </div>

                            <button type="submit" class="btn btn-outline-light float-right">Create Task</button>
                    </form>
                </div>
                </div>
                );
            }
        }
        
        export default Form;
