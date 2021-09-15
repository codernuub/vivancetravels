import React from 'react';
import '../../css/modal.css';

export default function ContactUs(props) {
    return (
        <div className="modal-content">
            <div className="close_btn" onClick={props.closeModal}>
                x
            </div>
            <form>
                <p className="form-head">Contact</p>
                <div className="inputs">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Contact Number" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Place" />
                    <input type="text" placeholder="Purpose" />
                    <input type="text" placeholder="Message" />
                </div>
                <button type="button">Send Enquiry</button>
            </form>
        </div>
    )
}