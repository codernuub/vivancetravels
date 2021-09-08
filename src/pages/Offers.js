import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/content.css';

export default function Offer(props) {
    return (
        <div>
            <Header menulists={props.menuLists} />
            <div className='offers content'>
                <h1 className='content-head'>Offers</h1>
            </div>
            <Footer menulists={props.menuLists} />
        </div>
    );
}
