import { Link } from "react-router-dom";


function AsideItem({ icon, text, to }) {
    return (
        <li className="Item">
            <Link to={to} className="btn">
                {icon && (
                    <div 
                        className="Icon" 
                        style={{ backgroundImage: `url(${icon})` }} 
                    />
                )}
                {text}
            </Link>
        </li>
    );
}

export default AsideItem;