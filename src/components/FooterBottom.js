import React from 'react';
import '../css/footerBottom.css';

export default function FooterBottom(prop) {
    return (<div className="footer-bottom">
        <ul>
            {prop.menuLists.map((list, index) => {
                const label = list.label.replace(list.label[0], list.label[0].toUpperCase())
                return <li key={index + 1}><a href={list.href}>{label}</a></li>
            })}
        </ul>
        <hr />
        <p>© 2021 <span>Vivance Travels</span> All rights reserved.</p>
    </div>);
}