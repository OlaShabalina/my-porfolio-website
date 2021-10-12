import { useState } from 'react';
import Footer from '../footer/Footer'
import './Contact.scss'

export default function Contact() {

    // handling submittion of the form
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="Contact" id="contact">
            <div className="content">
                <div className="left">
                    <div className="container">
                        <img 
                            src="assets/olgaAndDog.png"
                            alt="contact me octopus"
                        />
                    </div>
                </div>
                <div className="right">
                    <h2>Contact me</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your name" />
                        <input type="text" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                        {message && 
                        <span>
                            Thank you for your message, I'll be in touch shortly.
                        </span>}
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
