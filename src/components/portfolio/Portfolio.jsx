import './Portfolio.scss'

export default function Portfolio() {
    return (
        <div className="Portfolio" id="portfolio">
            <h1>Porfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>React</li>
                <li>Express</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
            </ul>
            <div className="container">
                <div className="project">
                    <img src="https://user-images.githubusercontent.com/88268603/136360553-f43c77bc-58a0-44e4-bc3b-dec9a39d324c.png" />
                    <h3>Task manager App</h3>
                </div>
                <div className="project">
                    <img src="https://user-images.githubusercontent.com/88268603/136360553-f43c77bc-58a0-44e4-bc3b-dec9a39d324c.png" />
                    <h3>Task manager App</h3>
                </div>
                <div className="project">
                    <img src="https://user-images.githubusercontent.com/88268603/136360553-f43c77bc-58a0-44e4-bc3b-dec9a39d324c.png" />
                    <h3>Task manager App</h3>
                </div>
                <div className="project">
                    <img src="https://user-images.githubusercontent.com/88268603/136360553-f43c77bc-58a0-44e4-bc3b-dec9a39d324c.png" />
                    <h3>Task manager App</h3>
                </div>
                <div className="project">
                    <img src="https://user-images.githubusercontent.com/88268603/136360553-f43c77bc-58a0-44e4-bc3b-dec9a39d324c.png" />
                    <h3>Task manager App</h3>
                </div>
                <div className="project">
                    <img src="https://user-images.githubusercontent.com/88268603/136360553-f43c77bc-58a0-44e4-bc3b-dec9a39d324c.png" />
                    <h3>Task manager App</h3>
                </div>
            </div>
        </div>
    )
}
