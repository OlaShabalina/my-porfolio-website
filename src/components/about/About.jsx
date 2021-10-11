import './About.scss'

export default function About() {
    return (
        <div className="About" id="about">
            <div className="wrapper">
                <small>If You reached here, You may as well get to know me a bit more! ;-) </small>
                <h1> A few words about myself: </h1>
                <ul>
                    <li>Bootcamp & Udemy graduate who thinks she can now build whatever she wants (with enough research, of course).</li>
                    <li>Currently working as a real estate agent - helping people to sell/buy their home (or a few investment properties).</li>
                    <li>Has a master degree in economics and a few other degrees/courses (more info =>
                        <a 
                            href="https://www.linkedin.com/in/olgashabalina/" target="_blank"
                            rel="noreferrer"
                            title="LinkedIn"
                        >
                            here
                        </a>).  
                    </li>
                    <li>Lived and worked in 4 countries, speaks Russian, Italian and a bit of Hindi & Chinese. </li>
                    <li>Loves animals. Training her dogs like if they are working in a circus. Rewards only though, no hardcore circus methods.</li>
                </ul>

            </div>
        </div>
    )
}
