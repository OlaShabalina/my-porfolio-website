import './Portfolio.scss'
import PortfolioNav from '../portfolioNav/PortfolioNav'
import { useState, useEffect } from 'react'
import { portfolioList } from '../../data'

export default function Portfolio() {

    // creating effect for when the button is clicked
    const [selected, setSelected] = useState("featured");

    // working with data from portfolioList file
    const [data, setData] = useState([]);
    
    // portfolio nav bar titles
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "basics",
            title: "HTML/CSS/JS"
        },
        {
            id: "express",
            title: "Express"
        },
        {
            id: "react",
            title: "React"
        }

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
            case "basics":
                shownData = portfolioList.filter(project => {
                    return project.basics;
                });
                setData(shownData);
                break;
            default:
                shownData = portfolioList.filter(project => {
                    return project.featured;
                });
                setData(shownData);
                break;
        }

    }, [selected])

    return (
        <div className="Portfolio" id="portfolio">
            <h1>Portfolio</h1>
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
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <img 
                                src={project.img}
                                alt={project.summery}
                            />
                        </a>
                        <h3>{project.title}</h3>
                    </div>
                ))}                
            </div>
        </div>
    )
}
