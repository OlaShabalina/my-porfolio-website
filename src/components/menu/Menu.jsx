import './menu.scss'

export default function Menu({ openMenu, setOpenMenu }) {
    return (
        <div className={"Menu " + (openMenu && "active")}>
            <ul>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#work">Work</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
