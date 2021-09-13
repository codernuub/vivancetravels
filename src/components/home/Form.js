import React, { useState } from 'react';
import FlightFormFields from './FormFields/FlightFormFields';
import HotelFormFields from './FormFields/HotelFormFields'
import BusFormFields from './FormFields/BusFromFields';
import TransferFormFields from './FormFields/TransferFormFields'
import ActivitiesFormFields from './FormFields/ActivitiesFormFields'
import HolidaysFormFields from './FormFields/HolidaysFormFields'
import FormLists from './FormLists';
import '../../css/form.css';

import { useLocation } from "react-router-dom";

export default function FormSection(prop) {

    const search = useLocation().search;
    const formview = new URLSearchParams(search).get('formview') || "FLIGHTS";

    const [formView, setFormView] = useState(formview);

    const [formListsData, setFromListData] = useState([
        {
            id: "list-1",
            icon: "fa-plane",
            name: "FLIGHTS",
            active: ("FLIGHTS" === formview),
        },
        {
            id: "list-2",
            icon: "fa-hotel",
            name: "HOTELS",
            active: ("HOTELS" === formview),
        },
        {
            id: "list-3",
            icon: "fa-bus",
            name: "BUSES",
            active: ("BUSES" === formview),
        },
        {
            id: "list-4",
            icon: "fa-taxi",
            name: "TRANSFERS",
            active: ("TRANSFERS" === formview),
        },
        {
            id: "list-5",
            icon: "fa-binoculars",
            name: "ACTIVITIES",
            active: ("ACTIVITIES" === formview),
        },
        {
            id: "list-6",
            icon: "fa-tree",
            name: "HOLIDAYS",
            active: ("HOLIDAYS" === formview),
        }
    ]);

    return (
        <div className="form-wrapper">
            {
                formView == "FLIGHTS" ?
                    <FlightFormFields /> : ""
            }
            {
                formView == "HOTELS" ?
                    <HotelFormFields /> : ""
            }
            {
                formView == "BUSES" ?
                    <BusFormFields /> : ""
            }
            {
                formView == "TRANSFERS" ?
                    <TransferFormFields /> : ""
            }
            {
                formView == "ACTIVITIES" ?
                    <ActivitiesFormFields /> : ""
            }
            {
                formView == "HOLIDAYS" ?
                    <HolidaysFormFields /> : ""
            }
            <FormLists formLists={formListsData} setFormView={setFormView} setFromListData={setFromListData} />
        </div>
    )
}