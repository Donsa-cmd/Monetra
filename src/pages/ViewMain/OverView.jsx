import DashboardCard from "../../components/UI/DashboardCard";
import StatItem from "../../components/UI/StatItem";

import "../../styles/MainConter/OverView.css"
import "../../styles/MainConter/StatItem.css"

const stats = [
  { id:1, title: "Balance", value: 5240, change: "+12%" },
  { id:2, title: "Income", value: 2100, change: "+8%" },
  { id:3, title: "Expenses", value: 1300, change: "-5%" },
];

function Overview() {
    return (
        <div className="Overview">
            <div className="Overview_Grid">
                <DashboardCard title="Resumen">
                    {stats.map(item => (
                        <StatItem
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            value={item.value.toLocaleString("es-CO", {
                                style: "currency",
                                currency: "COP",
                                minimumFractionDigits: 0
                            })}
                            change={item.change}
                        />
                    ))}
                </DashboardCard>
            </div>
        </div>
        
    );
}

export default Overview;