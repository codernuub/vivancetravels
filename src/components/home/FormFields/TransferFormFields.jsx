import React from 'react';

export default function TransferFormFields() {
    return (
        <div className="formfield">
            <form>
                <div className="input-content">
                    <label>Location</label>
                    <div className="input">
                        <span className="fa fa-plane"></span>
                        <input placeholder="Type Departure City" />
                    </div>
                </div>
                <button><span class="fa fa-search"></span></button>
            </form>
        </div>
    )
}