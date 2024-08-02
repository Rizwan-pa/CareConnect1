
import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Page1 from './pages/Page1';
import Contact from './pages/Contact';
function App() {
  return (
   <div>
       <Router>
            <Routes>
                 <Route path='/' element={<Page1/>}></Route>
                 <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
       </Router>
   </div>
  );
}

export default App;
