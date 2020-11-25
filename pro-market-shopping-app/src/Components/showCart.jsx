import React, { Component } from 'react'

export default class showCart extends Component {
    render() {
        const cartDetail = this.props.cartItems;
        console.log('cart detail', cartDetail);
        return (
            <div>
                <h1>Cart Page</h1>
            </div>
        )
    }
}
