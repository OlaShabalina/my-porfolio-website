import { useState, useRef } from 'react';
import Footer from '../footer/Footer'
import './Contact.scss'
import emailjs from 'emailjs-com';

export default function Contact() {

    // handling submittion of the form
    const [message, setMessage] = useState(false);

    // sending the message as an email to my email address
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_xc7lg0e', form.current, 'user_9JjODYQnAfM5phT2zIV34')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        // setting up message and reseting the form once the user submits it
        form.current.reset();
        setMessage(true);
    };

    // hide the thank you message after 3sec
    setTimeout(() => {
        setMessage(false)
    }, 3000)

    return (
        <div className="Contact" id="contact">
            <div className="content">
                <div className="left">
                    <div className="container">
                        <img
                            src="https://olgashabalina.com/assets/olgaAndDog.png"
                            alt="contact me octopus"
                        />
                    </div>
                </div>
                <div className="right">
                    <h2>Contact me</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Your name" name="fullName" />
                        <input type="text" placeholder="Email" name="email" />
                        <textarea placeholder="Message" name="message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                    {message &&
                    <span>
                        Thank you for your message, I'll be in touch shortly.
                    </span>}
                </div>
            </div>
            <Footer />
        </div>
    )
}
