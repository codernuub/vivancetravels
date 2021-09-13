import React from 'react';
import { useLocation } from "react-router-dom";

export default function FormRedirect() {
    const search = useLocation().search;
    const formview = new URLSearchParams(search).get('formview') || "FLIGHTS";
    window.location.href = `/?formview=${formview}`;
    return (<div></div>)
}