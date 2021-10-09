import './PortfolioNav.scss'

export default function PortfolioNav({ id, title, active, setSelected }) {
    return (
        <li 
            className={"PortfolioNav " + (active ? "active" : "")}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}
