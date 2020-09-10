import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Mybutton from './utils/myButton'

class componentName extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30,
    }
    percentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate = () => {
        setTimeout(() => {
            this.percentage()
        }, 40);
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={() => this.percentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 23th June</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Mybutton text="Purchase Tickets" bck="#ffa800" color="#fff" link="http://google.com" />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}


export default componentName;