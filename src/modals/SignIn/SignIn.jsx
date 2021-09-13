import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './SignIn.css'

function SignIn() {

    const closeModal =()=>{
        document.getElementById('signIn_box').style.top = "-200%"
    }

    return (
        <div className="signIn_box" id="signIn_box" >

            <button className="close_btn" onClick={closeModal}>
                x
            </button>

            <div className="box1">
                <p>Login with Facebook</p>
            </div>

            <div className="box2">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
            </div>

            <div className="box3">
                <button type="button">Login</button>
            </div>

            <div className="box4">
                <a className="forgot_pwd" href="">Forgot Password</a>
                <p className="signUp">New user? <a href="">Sign Up</a> </p>
            </div>

        </div>
    )
}

export default SignIn
