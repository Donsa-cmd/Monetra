import Aside from './ViewMain/Aside';
import MainConter from './ViewMain/MainConter';
import '../styles/Aside/Aside_Style.css';
import '../styles/MainConter/MainConter.css';

function Program() {
    return(
        <div className="ViewPage">
            <Aside />
            <MainConter />
        </div>
    );
    
}

export default  Program;