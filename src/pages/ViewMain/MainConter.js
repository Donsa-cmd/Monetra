import Header from "./Header";

import "../../styles/MainConter/header.css"

function MainConter({ children }) {
    return(
        <div className="Main_Container">
            <div className="Container_View"> 
                { /*Header Fijo */ }
                { <Header /> }

                { children }
            </div>
        </div>
    );
}

export default MainConter;