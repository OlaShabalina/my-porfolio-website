import './Skills.scss';
import { listOfSkills } from '../../data';

export default function Skills() {

    // some Devicon icons names include "plain" and some - "original"
    const isIconOriginal = (icon) => (
        (icon.original) 
        ? `devicon-${icon.name}-original` 
        : `devicon-${icon.name}-plain`
    )

    return (
        <div className="Skills" id="skills">
            <h1>What I have <span>learnt</span> and <span>applied</span> so far:</h1>
            <div className="container">
                {listOfSkills.map(icon => (
                    <i 
                        class={isIconOriginal(icon)}
                        key={icon.id}
                        title={icon.name}
                    >
                    </i>
                ))}
            </div>
        </div>
    )
}