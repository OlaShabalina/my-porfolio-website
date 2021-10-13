import './Header.scss';

export default function Header({ openMenu, setOpenMenu }) {
    return (
        <div className={"Header " + (openMenu && "active")}>
            <div className="wrapper">
                <div className="left-side">
                    <a href="#intro" className="logo">{"<OlgaShabalina />"}</a>
                </div>
                <div className="right-side">
                    <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
