import React from 'react';

export default function FormLists(prop) {

    //function to update the buttons below the form upon clicking
    const updateFormView = (formList) => {
        //first set the new button active
        prop.formLists.map(item => {
            item.active = item.name == formList.name ? true : false
        });
        //update the form that is shown
        prop.setFormView(formList.name)
    }

    return (<div className="formlists">
        {prop.formLists.map((formList, index) => {
            return <div key={index + 1} id={formList.id} className="formlist" onClick={() => { updateFormView(formList) }} >
                <span className={`circle ${formList.active ? 'active-circle' : ''}`}>
                    <span className="icon-box">
                        <i className={`fa ${formList.icon}`}></i>
                    </span>
                </span>
                <p>{formList.name}</p>
            </div>
        })}
    </div>)
}