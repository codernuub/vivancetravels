import React from 'react';
import FooterTop from '../components/FooterTop';
import FooterBottom from '../components/FooterBottom';

export default function Footer(prop) {
    return (
        <footer style={{
            width: "100%",
            paddin: 0,
            margin: 0
        }}>
            <FooterTop changeForm={prop.changeForm}/>
            <FooterBottom menuLists={prop.menuLists} />
        </footer>
    )
}