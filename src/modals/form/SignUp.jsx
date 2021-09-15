import React from 'react';
import '../../css/modal.css';

export default function SignUp(props) {
    return (
        <div className="modal-content">
            <div className="close_btn" onClick={props.closeModal}>
                x
            </div>
            <form>
                <p className="form-head">Register With Vivance Travels</p>
                <div className="inputs">
                    <input type="text" placeholder="Email Id" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="ReType Password" />
                </div>
                <button type="button">Register</button>
            </form>
            <p className="cursor-pointer nav-link" onClick={() => props.changeForm("signIn")}>Already Have An Account?</p>
        </div>
    )
}