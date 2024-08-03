
import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Page1 from './pages/Page1';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Sign from './pages/Sign';
function App() {
  return (
   <div>
       <Router>
            <Routes>
                 <Route path='/' element={<Page1/>}></Route>
                 <Route path='/contact' element={<Contact/>}></Route>
                 <Route path='/blog' element={<Blog/>}></Route>
                 <Route path='/sign-in' element={<Sign/>}></Route>
            </Routes>
       </Router>
   </div>
  );
}

export default App;
