import React, { useState } from 'react';
import FormFields from './FormFields';
import FormLists from './FormLists';
import '../../css/form.css';

export default function FormSection(prop) {
    const [formListsData] = useState([
        {
            id: "list-1",
            icon: "fa-plane",
            name: "FLIGHTS",
            active: false
        },
        {
            id: "list-2",
            icon: "fa-hotel",
            name: "HOTELS",
            active: true
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
            <FormFields />
            <FormLists formLists={formListsData} />
        </div>
    )
}