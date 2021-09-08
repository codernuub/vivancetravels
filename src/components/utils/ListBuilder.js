import React from 'react';

function MenuList(prop) {
    return (<ul className="menulist list">
        {prop.lists.map((list, index) => {
            return <li key={index + 1}>
                <a href={list.link}>{list.label.toUpperCase()}</a>
            </li>
        })}
    </ul>)
}

function CountryList(prop) {
    return (<ul className="countrylist list">
        {prop.list.map((list, index) => {
            return <li key={index+1}>
                <a href={list.href}>
                    <span className="countryFlag">
                        <span className={`flag-icon flag-icon-${list.flag} flag-icon-squared`}></span>
                    </span>
                    <span className="countryName">{list.currency}</span>
                </a>
                <span className="countryCurr">
                    <span>{list.code}</span>
                </span>
            </li>
        })}
        <li className="triangle"></li>
    </ul>)
}

export default function DestList(prop) {
    return (<div className="dest footer-list-wrapper">
        <h3>{prop.label}</h3>
        <ul className="footer-list">
            {prop.lists.map((list, index) => {
               return <li key={index + 1}><span>{list}</span></li>
            })}
        </ul>
    </div>)
}

export {
    MenuList,
    CountryList,
    DestList
}