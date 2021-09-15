import React from 'react';

import '../css/content.css';
import '../css/mytrip.css';

export default function MyTrip(props) {

    return (
            <div className='mytrip content'>
                <div className="main-content">
                    <h2>Access My Booking</h2>
                    <div className="mytrip-form-content">
                        <p>{'Please provide your Reservation Code & Email ID to proceed'}</p>
                        <form>
                            <input placeholder="Reservation Code" />
                            <input placeholder="Passenger Email ID" />
                            <button>SEARCH</button>
                        </form>
                    </div>
                </div>
            </div>
    );
}
