import React from 'react';

export default function HotelFormFields() {
    //Creating the array for the option of number of nights
    const NumberOfNightsLimit = 12;
    let NightsArray = []
    for(let i = 1; i < NumberOfNightsLimit; i++) {
        NightsArray.push(i)
    }

    return (
        <div className="formfield">
            <form>
                <div className="input-content">
                    <label>Going To</label>
                    <div className="input">
                        <span className="fa fa-plane"></span>
                        <input placeholder="Type Departure City" />
                    </div>
                </div>
                {/* <div className="sort-field"> */}
                    <div className="input-content">
                        <label>Check In</label>
                        <div className="input date-input">
                            <input type="date" placeholder="Select Date" />
                        </div>
                    </div>
                    <div className="input-content">
                        <label>Check Out</label>
                        <div className="input date-input">
                            <input type="date" placeholder="Select Date" />
                        </div>
                    </div>
                {/* </div> */}
                <div className="input-content">
                        <label>No. of Nights</label>
                        <div className="input" style={{height:"33%"}}>
                            <select name="no_of_nights" id="no_of_nights">
                                {
                                    NightsArray.map(count=><option value={count}>{count}</option>)
                                }
                            </select>
                        </div>
                    </div>
                <button><span class="fa fa-search"></span></button>
            </form>
        </div>
    )
}