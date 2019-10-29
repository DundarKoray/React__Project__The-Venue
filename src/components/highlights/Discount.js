import React, { Component } from 'react';

class Discount extends Component {
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <div className="discount_porcentage">
                        <span>23%</span>
                        <span>OFF</span>
                    </div>
                    <div className="discount_description">
                        <h3>Purchase tickets before 20th NOVEMBER</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Discount