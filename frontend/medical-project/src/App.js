
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Sign from './pages/Sign';
import Diet from './pages/Diet';
import Page1 from './pages/Page1';
function App() {
  return (
   <div>
       <Router>
            <Routes>
                 <Route path='/' element={<Page1/>}></Route>
                 <Route path='/contact' element={<Contact/>}></Route>
                 <Route path='/blog' element={<Blog/>}></Route>
                 <Route path='/sign-in' element={<Sign/>}></Route>
                 <Route path='/diet' element={<Diet/>}></Route>

            </Routes>
       </Router>    
   </div>
  );
}

export default App;
