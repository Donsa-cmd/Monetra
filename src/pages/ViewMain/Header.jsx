import profileImg from '../../assets/img/user.jpeg'; // imagen quemada
import Search from "../MainConter/Search";


function Header() {
    return (
        <div className="Header">

            {/* IZQUIERDA */}
            <div className="Header_Left">
                <div 
                    className="User_Image"
                    style={{ backgroundImage: `url(${profileImg})` }}
                ></div>

                <div className="User_Info">
                    <p className="Welcome_Text">Welcome!</p>
                    <h2 className="User_Name">Carlos</h2>
                    <span className="User_Role">Admin</span>
                </div>

            </div>

            {/* DERECHA */}
            <div className="Header_Right">
                <div className="Search_Zone">
                    {<Search />}
                </div>

                <div className="Header_Icons">
                    <div className="Icon_Message"></div>
                    <div className="Icon_Notification"></div>
                </div>
            </div>

        </div>
    );
}

export default Header;