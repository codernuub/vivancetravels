import React from 'react';
import '../../css/modal.css';

export default function ForgetPassword(props) {
    return (
        <div className="modal-content">
            <div className="close_btn" onClick={props.closeModal}>
                x
            </div>
            <form>
                <p className="form-head">Forget Password ?</p>
                <div className="inputs">
                    <input type="text" placeholder="Email Id" />
                    <input type="text" placeholder="Registered Mobile Number" />
                </div>
                <button type="button">Send Email</button>
            </form>
            <p className="cursor-pointer nav-link" onClick={() => props.changeForm("signIn")}>I am an Existing User</p>
        </div>
    )
}