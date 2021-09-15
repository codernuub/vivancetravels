import React from 'react';
import SignIn from './form/SignIn';
import SignUp from './form/SignUp';
import Forget from './form/Forget';
import ContactUs from './form/ContactUs';

export default function FormModal(props) {
    const closeModal = () => {
        document.querySelector('.modal').style.top = "-200%"
    }
    return <div className="modal">{
        {
            "signIn":<SignIn changeForm={props.changeForm} closeModal={closeModal} />,
            "signUp":<SignUp changeForm={props.changeForm} closeModal={closeModal} />,
            "forget":<Forget changeForm={props.changeForm} closeModal={closeModal} />,
            "contact":<ContactUs closeModal={closeModal} />
        }[props.form]
    }</div>
}
