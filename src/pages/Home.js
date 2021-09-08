import React from 'react';
import Header from '../components/Header';
import Form from '../components/home/Form';
import Exclusive from '../components/home/Exclusive';
import Hotels from '../components/home/Hotels';
import Holiday from '../components/home/Holiday';
import Footer from '../components/Footer';

export default function Home(props) {

    return (<div id="home">
        <Header menulists={props.menuLists} />
        <Form/>
        <Exclusive/>
        <Hotels/>
        <Holiday/>
        <Footer menulists={props.menuLists} />
    </div>)
}