import './Intro.scss'
import {KeyboardArrowDownOutlined} from '@material-ui/icons'

export default function Intro() {
    return (
        <div className="Intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/my-photo.png" alt="Olga Shabalina photo of the website owner" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Olga Shabalina</h1>
                    <h3>Real Estate Agent who loves <span>Coding</span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDownOutlined className="icon" />
                </a>
            </div>
        </div>
    )
}
