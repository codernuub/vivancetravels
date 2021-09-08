import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/content.css';

export default function About(props) {

    return (
        <div>
            <Header menulists={props.menuLists} />
            <div className='aboutUs content'>
                <h1 className='content-head'>About Us</h1>
                <p className="sm-text">Witnessing many years of successful story of wellness tourism with brand name Sukrit Wellness, the founder has brought an innovative and comprehensive travel system to serve our customer in all aspects of tourism.</p>
                <p className="sm-text">Customer centric holistic approach make Vivance Travels a huge money saving tool with complete peace of mind while traveling. We love making our customer save more and also serve them with excellent offers, discounts and tickets in rock-bottom prices. The easy to use online platform and our 24X7 world class customer support team enables our users to tailor their journey in their own ways.</p>
                <p className="sm-text">A wide range of products make us preferred choice for tourist worldwide. We serve in Flight, Hotel, Bus, Transfer, unique Activities and Wellness packages.</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <Footer menulists={props.menuLists} />
        </div>
    );
}

/**
 * About Us
Witnessing many years of successful story of wellness tourism with brand name Sukrit Wellness, the founder has brought an innovative and comprehensive travel system to serve our customer in all aspects of tourism.

Customer centric holistic approach make Vivance Travels a huge money saving tool with complete peace of mind while traveling. We love making our customer save more and also serve them with excellent offers, discounts and tickets in rock-bottom prices. The easy to use online platform and our 24X7 world class customer support team enables our users to tailor their journey in their own ways.

A wide range of products make us preferred choice for tourist worldwide. We serve in Flight, Hotel, Bus, Transfer, unique Activities and Wellness packages.
*/