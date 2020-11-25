import React, { Component } from 'react'


export default class showVegetable extends Component {
    render() {
        const detail = this.props.imageDetails
        console.log("Vegetable detail", detail);
        return (
            <div className="show-vegetable">
                <div><img src={detail.image} alt="vegetableimg"></img></div>
                <div className="image-details">
                    <div className="image-name">{detail.name}</div>
                    <div className="image-name">{detail.description}</div>

                </div>

            </div>
        )
    }
}
