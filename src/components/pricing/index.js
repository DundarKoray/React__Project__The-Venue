import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Start'],
        descriptions: [
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
            'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        ],
        links: ['https://www.ticketmaster.fi', 'https://www.ticketmaster.fi', 'https://www.ticketmaster.fi'],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>${this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.descriptions[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton text="Purchase" bkc="#ffa800" link={this.state.links[i]} />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;