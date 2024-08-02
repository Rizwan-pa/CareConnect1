import React from 'react'
import Navigator from '../components/Navigator';
import '../pages/page1.css';
import Footer from '../components/Footer';
function Page1() {
       
  return (
    <div>
         <div>
           <Navigator/>
           <div className='back'>  </div>
           
            <div className='middle' >
            <section >
               <div className='details'>
                   <img  className='imh' src='https://media.istockphoto.com/id/136188786/vector/heart.jpg?s=612x612&w=0&k=20&c=X4mkO5CMyJgUf7A2U4KSaxpDaoLetCpO0pkBSbDlvoo='></img>
                   <div className='text'>
                   <label ><h2>CareConnect: How Can we help you?</h2></label>
                   </div>
               </div>
            </section>
            </div>
        
           <div className='outerdetails' >
           <h1 className='headi'>WELCOME TO OUR WORLD</h1>
           <h3 className='subhead'>ABOUT US</h3>
           <p>
           Welcome to CareConnect, your trusted source for accurate health information and professional medical advice. In today's digital age, misinformation about health and diseases is rampant on social media, leading to serious health risks such as improper self-treatment and delayed professional consultation. At CareConnect, we are dedicated to combating this widespread issue by providing a reliable platform where health professionals share verified data and offer expert consultations.<br></br><br></br>

           Our mission is to promote healthy living by offering comprehensive advice on lifestyle, diet, and fitness. We believe that everyone deserves access to accurate and up-to-date health information, and our platform is designed to make this easily accessible. Whether you're looking for guidance on maintaining a balanced diet, tips for staying active, or professional medical advice, CareConnect is here to support you every step of the way.<br></br><br></br>

           By fostering a community where individuals can connect with qualified health professionals, we aim to improve health outcomes and empower people to make informed decisions about their well-being. Join us on our journey to create a healthier, more informed world.
          <br></br><br></br><br></br>
          CareConnect - Empowering Health Through Accurate Information.
           </p>
           </div>
           </div>
           <Footer/>
           
    </div>
  )
}

export default Page1
