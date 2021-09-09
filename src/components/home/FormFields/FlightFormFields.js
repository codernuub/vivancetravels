import React from 'react';

export default function FlightFormFields() {
    return (
        <div className="formfield">
            <div className="sub-content">
                <span>One Way</span>
                <span>Round Trip</span>
                <span class="active">Multi City</span>
            </div>
            <form>
                <div className="input-content">
                    <label>From</label>
                    <div className="input">
                        <span className="fa fa-plane"></span>
                        <input placeholder="Type Departure City" />
                    </div>
                </div>
                <div className="input-content">
                    <label>To</label>
                    <div className="input">
                        <span className="fa fa-plane fa-rotate-90"></span>
                        <input placeholder="Type Departure City" />
                    </div>
                </div>
                <div className="sort-field">
                    <div className="input-content">
                        <label>Departure</label>
                        <div className="input">
                            <input type="date" placeholder="Select Date" />
                        </div>
                    </div>
                    <div className="input-content">
                        <label>Return</label>
                        <div className="input">
                            <input type="date" placeholder="Select Date" />
                        </div>
                    </div>
                </div>
                <button><span class="fa fa-search"></span></button>
            </form>
        </div>
    )
}