import './Contact.scss'

export default function Contact() {
    return (
        <div className="Contact" id="contact">
            <div className="left">
                <img src="" />
            </div>
            <div className="right">
                <h2>Contact me</h2>
                <form>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send!</button>
                </form>
            </div>
        </div>
    )
}
