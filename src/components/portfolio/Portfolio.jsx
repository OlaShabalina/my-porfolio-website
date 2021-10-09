import './Portfolio.scss'
import PortfolioNav from '../portfolioNav/PortfolioNav'
import { useState } from 'react'

export default function Portfolio() {

    // creating effect for when the button is clicked
    const [selected, setSelected] = useState("featured");
    
    // portfolio nav bar titles
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "react",
            title: "React"
        },
        {
            id: "express",
            title: "Express"
        },
        {
            id: "html",
            title: "HTML/CSS"
        },
        {
            id: "js",
            title: "JavaScript"
        },
    ]

    return (
        <div className="Portfolio" id="portfolio">
            <h1>Porfolio</h1>
            <ul>
                {list.map(li => (
                    <PortfolioNav 
                        title={li.title} 
                        active={selected === li.id} 
                        setSelected={setSelected} 
                        id={li.id}
                    />
                ))}
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
