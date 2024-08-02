import React from 'react'
import '../components/navigator.css'
import { Link } from 'react-router-dom'
function Navigator() {
  return (
    <div>
        <div className='outer'>
            <img src='https://www.freeiconspng.com/thumbs/doctor-logo/transparent-medical-doctor-background-logos-18.png' alt='Error' className='image'></img>
            <label className='name'>CARECONNECT ||YOUR PERSONAL HEALTH MAINTAINER</label>
            <div className='head'>
                <Link to={'/'} className='de'>
                    <span  style={{textDecoration:'none'}}>Home</span>
                </Link>
                <Link to={'/contact'} className='de'><span >Contact</span></Link>
                <Link to={'/'} className='de'><span >Diet</span></Link>
                <Link to={'/'} className='de'><span >Research</span></Link>
                <Link to={'/'} className='de'><span >Sign in</span></Link>
            </div>
        </div>
    </div>
  )
}

export default Navigator
