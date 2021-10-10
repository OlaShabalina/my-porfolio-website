import './Contact.scss'

export default function Contact() {
    return (
        <div className="Contact" id="contact">
            <div className="left">
                <div className="container">
                    <img 
                        src="https://th.bing.com/th/id/OIP.73vyI0NEb-HVf9yjK13ulwHaEB?pid=ImgDet&rs=1"
                        alt="contact me octopus"
                    />
                </div>
            </div>
            <div className="right">
                <h2>Contact me</h2>
                <form>
                    <input type="text" placeholder="Your name" />
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send!</button>
                </form>
            </div>
        </div>
    )
}
