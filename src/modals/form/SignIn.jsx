import React from 'react';
import '../../css/modal.css';

export default function SignIn(props) {
    return (
        <div className="modal-content">
            <div className="close_btn" onClick={props.closeModal}>
                x
            </div>
            <form>
                <div className="facebook-auth">
                    <p>Login with Facebook</p>
                </div>
                <div className="inputs">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </div>
                <p className="cursor-pointer nav-link" onClick={() => props.changeForm("forget")}>Forgot Password ?</p>
                <button type="button">Login</button>
            </form>
            <p>New user? <span className="cursor-pointer nav-link" onClick={() => props.changeForm("signUp")}>Sign Up</span> </p>
        </div>
    )
}
