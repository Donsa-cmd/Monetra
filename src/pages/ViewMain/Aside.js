import AsideItem from '../../components/UI/AsideItem';
import dashboardIcon from '../../assets/img/Menu.png';
import issuesIcon from '../../assets/img/advertencia.png';
import filesIcon from '../../assets/img/archivos.png';
import threatDetailsIcon from '../../assets/img/archivo.png';
import settingsIcon from '../../assets/img/ajuste.png';
import SupportIcon from '../../assets/img/support.png';


const menu = [
    {
        title: "General",
        items: [
            { text: "Overview", icon: dashboardIcon, to: "/overview" },
            { text: "Issues", icon: issuesIcon, to: "/issues" },
            { text: "Files", icon: filesIcon, to: "/files" }
        ]
    },
    {
        title: "Reports",
        items: [
            { text: "Threat Details", icon: threatDetailsIcon },
            { text: "Threats" }
        ]
    },
    {
        title: "Settings",
        items: [
            { text: "Help & Supports", icon: SupportIcon },
            { text: "Settings", icon: settingsIcon }
        ]
    },
    {
        title: "Extra",
        items: [
            { text: "Logs" },
            { text: "Users" }
        ]
    }
];

function Aside() {
    return (
        <aside className="aside">
            <nav className="aside-nav">
                {menu.map((section, index) => (
                    <div key={index}>
                        <p className="aside-title">{section.title}</p>

                        <ul className="aside-list">
                            {section.items.map((item, i) => (
                                <AsideItem 
                                    key={i}
                                    icon={item.icon}
                                    text={item.text}
                                    to={item.to}
                                />
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    );
}

export default Aside;
