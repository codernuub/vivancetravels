import React from 'react';

export default function FormLists(prop) {

    return (<div className="formlists">
        {prop.formLists.map((formList, index) => {
            return <div key={index + 1} id={formList.id} className="formlist">
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