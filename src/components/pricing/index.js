import React, { Component } from 'react';
import Mybutton from '../highlights/utils/myButton';
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.',
            'Dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
            'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.'
        ],
        linkTo: ['http://google.com', 'http://google.com', 'http://google.com'],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state. delay[i]} key={i}>
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {this.state.desc[i]}
                    </div>
                    <div className="pricing_buttons">
                    <Mybutton text="Purchase Ticket" bck="#ffa800" color="#fff" link={this.state.linkTo[i]} />
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