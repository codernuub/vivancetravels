import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { DestList } from './utils/ListBuilder';
import '../css/footerTop.css';

export default function FooterTop() {
    const [destLists] = useState(["Delhi-Mumbai", "Banglore-Hyderabad", "Dubai-Hyderabad", "Ney york-Banglore", "Banglore-Dubai", "Banglore-Hyderabad", "Goa-Dubai", "Dubai-Chennai", "Chennai-Mumbai", "Delhi-Kolkata", "Pune-Cochin", " Udaipur-Hyderabad"])
    const [hotelLists] = useState(["Banglore Hotels", "Singapoor Hotels", "Dubai Hotels", "Sydney Hotels", "London Hotels", "Goa Hotels", "Manali Hotels", "Kolkata Hotels", "Netherlands Hotels", "Delhi Hotels", "Bombay Hotels"])
    return (<div className="container">

        <DestList label="Cheap flights by Destinations" lists={destLists} />
        <hr />
        <DestList label="Hotels at popular destinations" lists={hotelLists} />
        <hr />
        <div className="details">
            <div className="col footer-list-wrapper">
                <h3>Vivance Travels</h3>
                <ul className="footer-list">

                    <li>
                        <Link to="/aboutus" className="a">About us</Link>
                    </li>
                    <li>
                        <a>Contact us</a>
                    </li>

                    <li id="card">
                        <a><i className="fa fa-phone"></i>&nbsp;&nbsp;+91 85888808860 (24X7)</a>
                        <a><i className="fa fa-envelope"></i>&nbsp;&nbsp;Customer:care@vivancetravels.com</a>
                        <a><i className="fa fa-envelope"></i>&nbsp;&nbsp;Business: business@vivancetravels.com</a>
                    </li>
                    <li>
                        <a href="www.sykritwellness.com">www.sykritwellness.com</a>
                    </li>
                    <li>
                        <a href="www.kumbhsukrit.com">www.kumbhsukrit.com</a>
                    </li>

                </ul>
            </div>
            <div className="col footer-list-wrapper">
                <h3>Info</h3>
                <ul className="footer-list">

                    <li>
                        <Link to="/offers" className="a">Offers</Link>
                    </li>
                    <li>
                        <a id="flight_fare_calendar">Fare Calender</a>
                    </li>
                    <li>
                        <Link to="/faq" className="a">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/termsandconditions" className="a">Terms Condition</Link>
                    </li>
                    <li>
                        <Link to="/privacypolicy" className="a">Privacy Policy</Link>
                    </li>

                </ul>
            </div>
            <div className="col input footer-list-wrapper">
                <h3>Do not miss our offers</h3>
                <form>
                    <input placeholder="Enter your email" type="email" />
                    <button>submit</button>
                </form>
                <h3>Follow Us</h3>
                <div className="social">
                    <a href="https://www.facebook.com/vivancetravel" className="fa-stack fa-1x">
                        <i className="fa fa-circle-thin fa-stack-2x"></i>
                        <i className="fa fa-facebook fa-stack-1x"></i>
                    </a>
                    <a href="https://mobile.twitter.com/vivancetravels" className="fa-stack fa-1x">
                        <i className="fa fa-circle-thin fa-stack-2x"></i>
                        <i className="fa fa-twitter fa-stack-1x"></i>
                    </a>
                    <a href="https://www.instagram.com/vivancetravel/" className="fa-stack fa-1x">
                        <i className="fa fa-circle-thin fa-stack-2x"></i>
                        <i className="fa fa-instagram fa-stack-1x"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>);
}