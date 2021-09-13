import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from '../img/vivancelogo.png';
import userlogo from '../img/user.png';
import { MenuList, CountryList } from './utils/ListBuilder';
import "../css/header.css";

export default function Header(prop) {

    const [countryLists] = useState([
        {
            flag: 'au',
            currency: 'AUD',
            code: 'A$',
            href: "https://www.vivancetravels.com/index.php/utilities/set_preferred_currency/AUD"
        },
        {

            flag: 'bh',
            currency: 'BHD',
            code: 'ب.د',
            href: "https://www.vivancetravels.com/index.php/utilities/set_preferred_currency/BHD"
        },
        {
            flag: 'eu',
            currency: 'EUR',
            code: '€',
            href: "https://www.vivancetravels.com/index.php/utilities/set_preferred_currency/EUR"
        },
        {
            flag: 'gb',
            currency: 'GBP',
            code: '£',
            href: "https://www.vivancetravels.com/index.php/utilities/set_preferred_currency/GBP"
        },
        {
            flag: 'in',
            currency: 'INR',
            code: '₹',
            href: "https://www.vivancetravels.com/index.php/utilities/set_preferred_currency/INR"
        },
        {
            flag: 'sa',
            currency: 'SAR',
            code: 'SAR',
            href: "https://www.vivancetravels.com/index.php/utilities/set_preferred_currency/SAR"
        },
        {
            flag: 'us',
            currency: 'USD',
            code: '$',
            href: "https://www.vivancetravels.com/index.php/utilities/set_preferred_currency/USD"
        }
    ])

    const toggleLists = (classname) => {
        const nav = document.querySelector(`.${classname}`);
        nav.classList.toggle('open-list');
    }

    //State and function to control nav options
    const [open,setOpen] = useState(false)
    const toggleNavOptions = ()=>{
        setOpen(!open);
    }

    const toggleLogin=()=>{
        if(document.getElementById("signIn_box").style.top=="30%"){
            document.getElementById("signIn_box").style.top = "-200%"
        }else{
            document.getElementById("signIn_box").style.top = "0%"
        }
    }

    

    return (
        <header>
            <div className="left-head">
                {/*menu*/}
                <div className="menu">
                    <div onClick={() => toggleLists('menulist')} className="menubar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <MenuList lists={prop.menulists} />
                </div>
                {/*menu*/}
                <Link className='img-link' to="/"><img alt="vivance icon" src={logo} /></Link>
            </div>
            <div className="right-head">
                <div className="userlogo">
                    <img className="img" src={userlogo} alt="" onClick={toggleNavOptions} />
                </div>
                    <ul id="nav_options" style={{display:open?'flex':'none'}}>
                        <li><button type="button" onClick={toggleLogin}>Sign In</button></li>
                        <li><button type="button">Create Account</button></li>
                    </ul>

                <div className='countries'>
                    <div className="top">
                        <span className="countryFlag">
                            <span className="flag-icon flag-icon-in flag-icon-squared"></span>
                        </span>
                        <span onClick={() => toggleLists('countrylist')} className="dropdown fa fa-angle-down"></span>
                    </div>
                    <CountryList list={countryLists} />
                </div>
            </div>
        </header>
    );
}
