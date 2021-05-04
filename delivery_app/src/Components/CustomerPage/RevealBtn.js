import React, { Component } from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import "./RevealBtn.css"


class RevealBtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            driver: "Michelle",
            customer_name: "Michael",
            phoneNumber: "6179357417",
            ios: "&",
            android: "?",
            street_number: "92",
            street_name: "Devon",
            street_type: "Street",
            city: "Boston",
            state: "MA"
        }
        this.handleClickOption1.bind(this);
        this.handleClickOption2.bind(this);
        this.handleClickOption3.bind(this);
    }

    componentDidMount = () => {
        $(".material-button-toggle").on("click", function () {
            $(this).toggleClass("open");
            $('.option').toggleClass('scale-on');
        });
    };

    //
    handleClickOption1 = () => {
        window.location.href = `https://waze.com/ul?q=${this.state.street_number}%20${this.state.street_name}%20${this.state.street_type}%20,%20${this.state.street_type}&navigate=yes`
    }
    handleClickOption2 = () => {
        window.location.href = `sms:${this.state.phoneNumber}${this.state.ios}body=Hello ${this.state.customer_name}... this is ${this.state.driver} from Tasting Counter. I\'ll be there in about 20 minutes with your TC@home delivery. I will text you again once I have left your package on your doorstep. I\'ll not ring your doorbell. Thank you! ${this.state.customer_name}`   
    }
    handleClickOption3 = () => {
        window.location.href = `sms:${this.state.phoneNumber}${this.ios}body=Hello ${this.state.customer_name}... your package was just delivered. Please let me know when you\'ve received it. Thank you so much! ${this.state.customer_name}`
    }

    render() {
        return (
            <div>
                <div class="btn_container">
                    <div class="btn_row">
                        <div class="col-md-4 col-md-offset-4">
                            <div class="material-button-anim">
                                <ul class="list-inline" id="options">
                                    <li class="option">
                                        <button class="material-button option1" type="button" onClick={this.handleClickOption1}>
                                            <span class="fab fa-waze fa-3x" aria-hidden="true"></span>
                                        </button>
                                    </li>
                                    <li class="option">
                                        <button class="material-button option2" type="button" onClick={this.handleClickOption2}>
                                            <span class="fas fa-sms fa-3x" aria-hidden="true"></span >
                                        </button>
                                    </li>
                                    <li class="option">
                                        <button class="material-button option3" type="button" onClick={this.handleClickOption3}>
                                            <span class="fas fa-clipboard-check fa-3x" aria-hidden="true"></span>
                                        </button>
                                    </li>
                                </ul>
                                <button
                                    class="material-button material-button-toggle"
                                    type="button"
                                >
                                    <span class="fa fa-plus" aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RevealBtn;