import React, { useState } from 'react';

import mumbai from '../../img/mumbai.jpg';
import newyork from '../../img/newyork.jpg';
import delhi from '../../img/delhi.jpg';
import goa from '../../img/goa.jpg'
import singapore from '../../img/singapore.jpg';
import bangkok from '../../img/bangkok.jpg';

import '../../css/slider.css';
import '../../css/hotels.css';

var sectionScrolled = 1;
const slide = function (pos) {
    let slidePos = Number.parseInt(pos);
    if (sectionScrolled === 1 && slidePos === -1) return;
    const noOfDistanceToScroll = (document.body.clientWidth < 1000 ? 3 : 2)+1;
    const isLastSlide = (noOfDistanceToScroll <= sectionScrolled && slidePos === 1);
    slidePos = isLastSlide ? -1 : slidePos;
    const hotels = document.querySelector('.hotels');
    const scrollDistance = (hotels.children[0].clientWidth * slidePos * sectionScrolled) + 25;
    sectionScrolled += isLastSlide ? (1 - sectionScrolled) : slidePos;
    hotels.scrollTo(scrollDistance, 0)
}

export default function Exclusive(prop) {

    const [hotels] = useState([
        {
            country: "India",
            city: "Mumbai",
            img: mumbai
        },
        {
            country: "Singapore",
            city: "Singapore",
            img: singapore
        },
        {
            country: "India",
            city: "Delhi",
            img: delhi
        },
        {
            country: "India",
            city: "Goa",
            img: goa
        },
        {
            country: "Thailand",
            city: "Bangkok",
            img: bangkok
        },
        {
            country: "United States",
            city: "New York",
            img: newyork
        }
    ])
    return (
        <div className="hotel-wrapper slider">
            <h2>HOTELS WITH BEST DEALS</h2>
            <div className="slider-wrapper">
                <span className="angle" onClick={() => slide("-1")}><i className="fa fa-angle-left"></i></span>
                <div className="hotels slides">
                    {hotels.map((dest, index) => {
                        return <div key={index + 1} id={index + 1} className="hotel">
                            <img src={dest.img} alt={dest.city} />
                            <div className="card-content">
                                <h3>{dest.city}</h3>
                                <span>{dest.country}</span>
                            </div>
                        </div>
                    })}
                </div>
                <span className="angle" onClick={() => slide("1")}><i className="fa fa-angle-right"></i></span>
            </div>
        </div>)
}