import React, { useState } from 'react';
import FlightFormFields from './FormFields/FlightFormFields';
import HotelFormFields from './FormFields/HotelFormFields'
import BusFormFields from './FormFields/BusFromFields';
import TransferFormFields from './FormFields/TransferFormFields'
import ActivitiesFormFields from './FormFields/ActivitiesFormFields'
import HolidaysFormFields from './FormFields/HolidaysFormFields'
import FormLists from './FormLists';
import '../../css/form.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

export default function FormSection(prop) {

    const [formView,setFormView] = useState("FLIGHTS")


    const [formListsData,setFromListData] = useState([
        {
            id: "list-1",
            icon: "fa-plane",
            name: "FLIGHTS",
            active: true,
        },
        {
            id: "list-2",
            icon: "fa-hotel",
            name: "HOTELS",
            active: false
        },
        {
            id: "list-3",
            icon: "fa-bus",
            name: "BUSES",
            active: false
        },
        {
            id: "list-4",
            icon: "fa-taxi",
            name: "TRANSFERS",
            active: false
        },
        {
            id: "list-5",
            icon: "fa-binoculars",
            name: "ACTIVITIES",
            active: false
        },
        {
            id: "list-6",
            icon: "fa-tree",
            name: "HOLIDAYS",
            active: false
        }
    ])
    return (
        <div className="form-wrapper">
            {
                formView=="FLIGHTS"?
                <FlightFormFields/>:""
            }
            {
                formView=="HOTELS"?
                <HotelFormFields/>:""
            }
            {
                formView=="BUSES"?
                <BusFormFields/>:""
            }
            {
                formView=="TRANSFERS"?
                <TransferFormFields/>:""
            }
            {
                formView=="ACTIVITIES"?
                <ActivitiesFormFields/>:""
            }
            {
                formView=="HOLIDAYS"?
                <HolidaysFormFields/>:""
            }
            <FormLists formLists={formListsData} setFormView={setFormView} setFromListData={setFromListData}/>
        </div>
    )
}