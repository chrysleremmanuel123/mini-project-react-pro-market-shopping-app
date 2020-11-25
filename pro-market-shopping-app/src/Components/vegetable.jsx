import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ShowVegetable from '../Components/showVegetable'
import ShowCart from './showCart';
export default class vegetable extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            imageDetails: [],
            cartItems: [],
        };
    }
    componentDidMount() {
        axios.get('https://api.mocki.io/v1/7bd0682b')
            .then(res => {
                this.setState({ products: res.data.products })
                // console.log("Api Data ", res.data.products)
            })
    }

    renderVegetable = () => {
        const products = this.state.products;
        const mapRow = products.map(product => (
            <div key={product.id} className="vegetable-container">
                <div><Link to="/showVegetable"><img src={product.image} alt="" className="image" onClick={() => this.setState({ imageDetails: product })} /></Link></div>
                <div className="content">
                    <div>{product.name}</div>
                    <div><span>&#8377;</span>{product.price}</div>
                    <div><button className="add-button" onClick={() => this.setState({ cartItems: [...this.state.cartItems, product] })}>Add To Cart</button></div>
                </div>

            </div>
        ));

        return mapRow;

    }

    render() {
        console.log('cart', this.state.cartItems);
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            {this.renderVegetable()}
                        </Route>
                        <Route path="/showVegetable">
                            <ShowVegetable imageDetails={this.state.imageDetails} />
                        </Route>
                        <Route path="/showCart">
                            <ShowCart cartItems={this.state.cartItems} />
                        </Route>

                    </Switch>

                </div>
            </Router>

        )
    }
}
