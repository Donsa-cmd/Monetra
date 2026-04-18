import Search from "../MainConter/Search";


function MainConter() {
    return(
        <div className="Main_Container">
            <div className="Container_View"> 
                <div className="Search_Zone">
                    <Search />
                </div>
                <p className="Container_Title">Hello, Usuario</p>
            </div>
        </div>
    );
}

export default MainConter;