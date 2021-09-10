import React from 'react';

export default function ActivitiesFormFields() {
    return (
        <div className="formfield">
            <form>
                <div className="input-content" style={{width:"60%"}}>
                    <label>Enter Location</label>
                    <div className="input">
                        <span className="fa fa-map-marker"></span>
                        <input placeholder="Location" />
                    </div>
                </div>
                <button><span class="fa fa-search"></span></button>
            </form>
        </div>
    )
}