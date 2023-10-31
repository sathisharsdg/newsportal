import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import India from './Countries/India';
import Aus from './Countries/Aus';
import Us from './Countries/Us';
import Header from './Components/Header';
import Uk from './Countries/Uk';
function App() {
    return (
        <div>
            <Router>
                 <Header/>
                <Routes>
                   <Route path='/' exact element={<India/>}></Route>                                    
                   <Route path='/aus' exact element={<Aus/>}></Route>                                    
                   <Route path='/us' exact element={<Us/>}></Route>                                    
                   <Route path='/jp' exact element={<Uk/>}></Route>                                    
                </Routes>
            </Router>
    
        </div>
    );
}

export default App;