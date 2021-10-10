import './Portfolio.scss'
import PortfolioNav from '../portfolioNav/PortfolioNav'
import { useState, useEffect } from 'react'
import { portfolioList } from '../../data'

export default function Portfolio() {

    // creating effect for when the button is clicked
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    
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

    // Setting up a filter depending on which nav link is clicked
    useEffect(() => {

        let shownData;
        
        switch(selected) {
            case "featured":
                shownData = portfolioList.filter(project => {
                    return project.featured;
                });
                setData(shownData);
                break;
            case "react":
                shownData = portfolioList.filter(project => {
                    return project.react;
                });
                setData(shownData);
                break;
            case "express":
                shownData = portfolioList.filter(project => {
                    return project.express;
                });
                setData(shownData);
                break;
            case "html":
                shownData = portfolioList.filter(project => {
                    return project.html;
                });
                setData(shownData);
                break;
            case "js":
                shownData = portfolioList.filter(project => {
                    return project.js;
                });
                setData(shownData);
                break;
        }

    }, [selected])

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
                        key={li.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(project => (
                    <div className="project" key={project.id} >
                        <a href={project.link}>
                            <img 
                                src={project.img}
                                alt={project.summery}
                            />
                        </a>
                        <h3>{project.title}</h3>
                    </div>
                ))}                
            </div>
            <p>Hey, I'm yet to deploy my projects but here are the links to my GitHub profile to see the code</p>
        </div>
    )
}
