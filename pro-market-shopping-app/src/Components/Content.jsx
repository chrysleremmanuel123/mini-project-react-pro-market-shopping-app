import React, { Component } from 'react'
import Vegetable from '../Components/vegetable'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

export default class Content extends Component {
    render() {
        return (
            <>
                <Router>
                    <div className="heading-container">
                        <h1 className="heading">ProMarket</h1>
                        <Route>
                            <Link to="/showCart"><button className="cart-button"><img src="https://img.icons8.com/nolan/45/favorite-cart.png" alt="cart-img" /></button></Link>
                        </Route>
                    </div>
                </Router>
                <div className="main">
                    <Vegetable />
                </div>




            </>
        )
    }
}
