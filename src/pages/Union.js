import Aside from './ViewMain/Aside';
import MainConter from './ViewMain/MainConter';
import { Routes,Route } from 'react-router-dom';

import '../styles/Aside/Aside_Style.css';
import '../styles/MainConter/MainConter.css';
import Overview from './ViewMain/OverView';

function Program() {
    return(
        <div className="ViewPage">
            <Aside />
            <MainConter>
                <Routes>
                    <Route path="/" element={<Overview/>} />
                    <Route path="/overview" element={ <Overview />} />
                </Routes>
            </MainConter>
        </div>
    );
    
}

export default  Program;