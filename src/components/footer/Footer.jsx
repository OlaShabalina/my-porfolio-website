import './Footer.scss'

export default function Footer() {
    return (
        <div className="Footer">
            <div className="socials">
                <a 
                href="https://github.com/OlaShabalina" 
                target="_blank"
                rel="noreferrer"
                >
                    <i className="devicon-github-original"></i>
                </a>
                <a 
                href="https://www.linkedin.com/in/olgashabalina/" 
                target="_blank"
                rel="noreferrer"
                >
                    <i className="devicon-linkedin-plain"></i>
                </a>
                <a 
                href="https://twitter.com/mynewcodinglife" 
                target="_blank"
                rel="noreferrer"
                >
                    <i className="devicon-twitter-plain"></i>
                </a>
            </div>
            <p>© 2021 Portfolio of Olga Shabalina</p>
        </div>
    )
}
