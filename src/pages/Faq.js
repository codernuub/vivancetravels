import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/content.css';

export default function Faq(props) {
    return (
        <div>
            <Header menulists={props.menuLists} />
            <div className='faq content'>
                <h1 className='content-head'>FAQ</h1>

                <h3>Do I must create an account to be able to make booking?</h3>
                <p className="sm-text">No, you can book as a guest also.</p>
                <h3>Are the prices dhown on your website applicable to all?</h3>
                <p className="sm-text" >Yes</p>
                <h3>How do I make reservation for someone else?</h3>
                <p className="sm-text">To complete a reservation for someone else, simply type in his
                    or her name instead of yours for the passenger/traveller name.
                    Your profile information (e.g. name, address, phone number, etc.)
                    will be used as a default. However,
                    you may type over the appropriate fields and replace them with the actual traveller’s information.</p>
                <h3>How do I know my reservation is confirmed?</h3>
                <p className="sm-text">After we receive your reservation, we will send you an immediate e-mail confirmation.
                    This e-mail will include your itinerary details and ticket price.
                    You may also confirm your reservation online by accessing "MY TRIP" as a guest user and “My account” as a logged-in user.</p>
                <h3>I don’t know the airport code for my departure or arrival city. Can I enter the name of the city instead?</h3>
                <p className="sm-text">Yes. Vivance travels lets you enter city name in full instead of three letter airport code in the airport code field.</p>
                <h3>What if I need to change my flight arrangements?</h3>
                <p className="sm-text">If you need to change your flight arrangements at any time, please email us or call us. Based on the nature of your request, we can initiate the modification/cancellation.</p>
                <h3>Why did the fare change at the time of purchase?</h3>
                <p className="sm-text">Vivance Travels uses a real-time reservation database, the same used by travel agents worldwide that lists actual ticket prices and availability. As airlines fill flights or change fares, the database immediately reflects those changes. Always be sure to double-check prices when reserving or purchasing tickets, as the fare may have changed since you first searched for fares or created your itinerary.</p>
                <h3>How do I print my e-ticket?</h3>
                <p className="sm-text">We encourage paperless system. You can always view the itinerary on the go. If you are logged in then you see your tickets in “My Account”. As a guest user, you can retrieve the ticket by clicking on “MY TRIP” from main menu.</p>

            </div>
            <Footer menulists={props.menuLists} />
        </div>
    );
}