import './About.scss'

export default function About() {
    return (
        <div className="About" id="about">
            <div className="wrapper">
                <small>If You reached here, You may as well get to know me a bit more! ;-) </small>
                <h1> A few words about myself: </h1>
                <ul>
                    <li><strong>Bootcamp & Udemy</strong> graduate who thinks she can now build whatever she wants (with enough research, of course).</li>
                    <li>Volunteers for <strong>Inco web-app project</strong>, learning to work in a big team and my contribution is => <a 
                        href="https://github.com/OlaShabalina/incode-web-app" target="_blank"
                        rel="noreferrer"
                        title="Github Fork of the Inco project"
                    >
                        here
                    </a>.</li>
                    <li>Currently working as a <strong>real estate agent</strong> => helping people to sell/buy their home (or a few investment properties).</li>
                    <li>Has a <strong>master degree in economics</strong> and a few other degrees/courses (more info => <a 
                        href="https://www.linkedin.com/in/olgashabalina/" target="_blank"
                        rel="noreferrer"
                        title="LinkedIn"
                    >
                        here
                    </a>).  
                    </li>
                    <li>Lived and worked/studied in 4 countries, speaks Russian, Italian and a bit of Hindi & Chinese. </li>
                    <li>Loves animals, coffee and <strong>connecting with people</strong>.
                    </li>
                </ul>

            </div>
        </div>
    )
}
