function DashboardCard({ title, children }) {
    return (
        <div className="Card">
            {title && <p className="Card_Title">{title}</p>}
            <div className="Card_Content">
                {children}
            </div>
        </div>
    );
}

export default DashboardCard;