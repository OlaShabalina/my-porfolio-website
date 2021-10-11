import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import './ImageFlip.scss'

export default function ImageFlip({ img, flippedImg}) {

    // set up a state for the image flip
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip 
            isFlipped={isFlipped} 
            flipDirection="horizontal" 
            containerClassName="ImageFlip"
            flipSpeedFrontToBack={1}
            flipSpeedBackToFront={0.5}
        >
            <img 
                onClick={handleClick} 
                src={isFlipped ? img : flippedImg}
                alt="Front of the developer"
            />
            <img 
                onClick={handleClick} 
                src={isFlipped ? img : flippedImg} 
                alt="Back of the developer"
            />
        </ReactCardFlip>
    )
}
