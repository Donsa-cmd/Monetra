import DashboardCard from "../../components/UI/DashboardCard";

import "../../styles/MainConter/OverView.css"

function Overview() {
    return (
        <div className="Overview_Grid">

            <DashboardCard title="Balance">
                <h2>$1,200</h2>
            </DashboardCard>

            <DashboardCard title="Expenses">
                <h2>$300</h2>
            </DashboardCard>

            <DashboardCard title="Income">
                <h2>$900</h2>
            </DashboardCard>

        </div>
    );
}

export default Overview;