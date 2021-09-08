import React, { useState } from 'react';

import yogic_tour from '../../img/yogic_tour.jpg';
import detox from '../../img/detox.jpg';
import himalayan from '../../img/himalayan.jpg';
import ratings from '../../img/star_rating.png';

import '../../css/slider.css';
import '../../css/holiday.css';

export default function Holiday() {
    const [destinations] = useState([
        {
            img:yogic_tour,
            name: "An Yogic Tour in Dandakvan, Gujrat",
            place: "Vansda, India",
            price: 43000,
            plan: "6 Night / 7 Days"
        },
        {
            img:detox,
            name: "Detox yourself With Ayurveda",
            place: "Mumbai, India",
            price: 30000,
            plan: "6 Night / 7 Days"
        },
        {
            img:himalayan,
            name: "Tour to Himalayan Energy Centre",
            place: "Kotdwar, Uttarakhand, India",
            price: 55000,
            plan: "6 Night / 7 Days"
        },

    ])
    return (<div className="destination-wrapper slider">
        <h2>INSPIRATIONAL HOLIDAY DESTINATIONS</h2>
        <div className="destinations">
            {destinations.map((dest, index) => {
                return <div key={index+1} className="destination">
                    <img src={dest.img} alt={dest.name} />
                    <div className="card-content">
                        <h3>{dest.name}</h3>
                        <span>{dest.place}</span>
                        <div className="details">
                            <div className="left-section">
                                <img src={ratings} alt="rating" />
                                <span>Starting at</span>
                                <p>₹ {dest.price}</p>
                            </div>
                            <div className="right-section">
                                <span>{dest.plan}</span>
                                <button>View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>);
}