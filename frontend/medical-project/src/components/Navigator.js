import React from 'react'
import { Link } from 'react-router-dom'
import '../components/navigator.css'
function Navigator() {
  return (
    <div>
        <div className='outer'>
            <img src='https://www.freeiconspng.com/thumbs/doctor-logo/transparent-medical-doctor-background-logos-18.png' alt='Error' className='imagee'></img>
            <label className='name'>CARECONNECT ||YOUR PERSONAL HEALTH MAINTAINER</label>
            <div className='head'>
                <Link to={'/'} className='de'>
                    <span  style={{textDecoration:'none'}}>Home</span>
                </Link>
                <Link to={'/contact'} className='de'><span >Contact</span></Link>            
                
                <Link to={'/ee'} className='de'><span >Blog</span></Link>
                {/* <a href="./aa.html">LOG</a> */}
                <Link to={'/diet'} className='de'><span >Diet</span></Link>
                <Link to={'/sign-in'} className='de'><span >Sign in</span></Link>

            </div>
        </div>
    </div>
  )
}

export default Navigator
