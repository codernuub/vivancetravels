import React from 'react';

export default function BusFormFields() {
    return (
        <div className="formfield">
            <form>
                <div className="input-content" style={{width:"45%"}}>
                    <label>From</label>
                    <div className="input">
                        <span className="fa fa-map-marker"></span>
                        <input placeholder="Type Departure City" />
                    </div>
                </div>
                <div className="input-content" style={{width:"45%"}}>
                    <label>To</label>
                    <div className="input">
                        <span className="fa fa-map-marker"></span>
                        <input placeholder="Type Departure City" />
                    </div>
                </div>
                <div className="sort-field">
                    <div className="input-content">
                        <label>Date</label>
                        <div className="input date-input">
                            <input type="date" placeholder="Select Date" />
                        </div>
                    </div>
                </div>
                <button><span class="fa fa-search"></span></button>
            </form>
        </div>
    )
}