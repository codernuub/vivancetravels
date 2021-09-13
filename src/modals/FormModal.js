import React from 'react';
import '../css/formModal.css';
export default function FormModal(props) {
    return (<form className={`form-type-${props.formType}`} id={props.formId}>
        {props.children}
    </ form>)
}
