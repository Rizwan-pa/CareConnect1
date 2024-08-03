import React, { useState } from 'react'

import Navigator from '../components/Navigator'
import './sign.css'
function Sign() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
      setIsLogin(!isLogin);
    };
  return (
   
    <div>
    
       <Navigator/>
      <div className='mostouter'>
       <div className='imagediv'>
                <img src='.\images\Cover.png' className='imagere'></img>
       </div>
       <div className="auth-container">
      <div className="auth-box">
        {isLogin ? (
          <>
           
            <div>
            <h2 style={{color:'white'}}>Login</h2>
            <form>
              <div className="input-group">
                <img src="https://icons.veryicon.com/png/o/education-technology/education-cloud/username-1.png" alt="username icon" className="input-icon" />
                <input type="text" id="username" name="username" placeholder="Username" required />
              </div>
              <div className="input-group">
                <img src="https://w7.pngwing.com/pngs/975/821/png-transparent-password-manager-computer-icons-password-strength-password-safe-chang-miscellaneous-password-strength-password-safe-thumbnail.png" alt="password icon" className="input-icon" />
                <input type="password" id="password" name="password" placeholder="Password" required />
              </div>
              <button type="submit" className="auth-button">Login</button>
            </form>
            <p className="toggle-link">Don't have an account? <span onClick={toggleForm}>Sign Up</span></p>
            </div>
        
            

          </>
          
          
        ) : (
          <>
            <h2 style={{color:'white'}}>Sign Up</h2>
            <form>
              <div className="input-group">
                <img src="https://icons.veryicon.com/png/o/education-technology/education-cloud/username-1.png" alt="username icon" className="input-icon" />
                <input type="text" id="username" name="username" placeholder="Username" required />
              </div>
              
              <div className="input-group">
                <img src="https://w7.pngwing.com/pngs/975/821/png-transparent-password-manager-computer-icons-password-strength-password-safe-chang-miscellaneous-password-strength-password-safe-thumbnail.png" alt="password icon" className="input-icon" />
                <input type="password" id="password" name="password" placeholder="Password" required />
              </div>
              <button type="submit" className="auth-button">Sign Up</button>
            </form>
            <p className="toggle-link">Already have an account? <span onClick={toggleForm}>Login</span></p>
          </>
        )}
      </div>
    </div>
      
    </div>
    </div>
  )
}

export default Sign
