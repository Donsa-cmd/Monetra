function StatItem({ icon, title, value, change }) {
    return (
        <div className="StatItem">

            <div 
                className="StatIcon"
                style={{ backgroundImage: `url(${icon})` }}
            ></div>

            <div className="StatInfo">
                <p className="StatTitle">{title}</p>

                <div className="StatData">
                    <h3 className="StatValue">{value}</h3>

                    <span className={change.includes("+") ? "positive" : "negative"}>
                        {change}
                    </span>
                </div>
            </div>

        </div>
    );
}

export default StatItem;