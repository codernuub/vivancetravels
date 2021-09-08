import React from 'react';
import flightImg from '../../img/flightImg.png';
import '../../css/exclusive.css';

export default function Exclusive() {
    return (<div className="exclusive">
        <div className="section1">
            <p>
                <img src={flightImg} alt='flight-icon'></img>
                <span>Find the millions of cheaper Flights, Hotels & Tour Packages</span>
            </p>
            <p>
                <img src={flightImg} alt='flight-icon'></img>
                <span>Hassle free Booking and Cancellation with 24X7 support</span>
            </p>
        </div>
        <h1>EXCLUSIVE OFFERS</h1>
    </div>)
}