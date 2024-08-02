
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Diet from './pages/Diet';
import Page1 from './pages/Page1';
function App() {
  return (
   <div>
       <Router>
            <Routes>
                 <Route path='/' element={<Page1/>}></Route>
                 <Route path='/contact' element={<Contact/>}></Route>
                 <Route path='/diet' element={<Diet/>}></Route>

            </Routes>
       </Router>    
   </div>
  );
}

export default App;
