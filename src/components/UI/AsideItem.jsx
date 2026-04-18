function AsideItem({ icon, text }) {
    return (
        <li className="Item">
            <button className="btn">
                {icon && (
                    <div 
                        className="Icon" 
                        style={{ backgroundImage: `url(${icon})` }} 
                    />
                )}
                {text}
            </button>
        </li>
    );
}

export default AsideItem;