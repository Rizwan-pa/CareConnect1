
import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Page1 from './pages/Page1';
function App() {
  return (
   <div>
       <Router>
            <Routes>
                 <Route path='/' element={<Page1/>}></Route>
            </Routes>
       </Router>
   </div>
  );
}

export default App;
