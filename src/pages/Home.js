import React from 'react';
import Form from '../components/home/Form';
import Exclusive from '../components/home/Exclusive';
import Hotels from '../components/home/Hotels';
import Holiday from '../components/home/Holiday';

export default function Home(props) {

    return (<div id="home">
   
        <Form />
        <Exclusive />
        <Hotels />
        <Holiday />
       
    </div>)
}