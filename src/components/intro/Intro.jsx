import './Intro.scss'
import {KeyboardArrowDownOutlined} from '@material-ui/icons'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {

    // code to apply ityped effect on the span
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 40,
            strings: ["Coding", "JavaScript", "React", "Learning", "HTML", "CSS"]
        })
    }, [])

    return (
        <div className="Intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img 
                        src="https://olgashabalina.com/my-porfolio-website/assets/olgaShabalina.png" 
                        alt="Cartoon-like portrait of myself" 
                    />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Olga Shabalina</h1>
                    <h3>Real Estate Agent who loves <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDownOutlined className="icon" />
                </a>
            </div>
        </div>
    )
}
