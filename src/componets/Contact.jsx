import React ,{useEffect} from 'react'
import './contact.css'
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Footer } from './Footer';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='mt-39'>
      <div style={{ margin: "auto" }} className='mt-5 mb-5'>
        <h1 style={{ color: "black", fontWeight: "700" }}>Contact Us</h1>
        <h5>Any question or remarks? Just write us a message!</h5>
      </div>
      <div data-aos="zoom-in" className='mt-3 mani-container' style={{ width: "1150px", height: "auto", padding: "5px", borderRadius: "20px",boxShadow:"0 0 15px #333", background: "rgba(0,0,0,0.1)", backdropFilter: "blur(10px)", margin: "auto", display: "flex" }}>
        <div style={{ width: "450px", height: "570px", backgroundColor: "black", borderRadius: "20px" ,display:"flex" ,flexDirection:"column",justifyContent:"space-around", color:"white"}} className='mt-2 mx-2 p-2 left-container'>
          <div>
            <h3>Contact Information</h3>
            <p>Say something to start a live chat!</p>
          </div>
          <div>
            <div style={{display:"flex"}}><FaPhoneAlt className='mx-4' /><p>9567704027</p></div>
            <div className='mt-3' style={{display:"flex"}}> <MdEmail className='mx-4' /><p></p>jasirjas9605@gmail.com</div>
            <div className='mt-5' style={{display:"flex",textAlign:"start"}}> <FaLocationDot className='mx-4 ' /><p>132 Dartmouth Street Boston,Massachusetts 02156 United State</p>
            </div>
          </div>
          <div  style={{ display: "flex",justifyContent:"end"}}>
            <FaInstagram className='m-2' />
            <FaSquareFacebook className='m-2' />
            <IoLogoWhatsapp className='m-2' />
            <IoLogoYoutube className='m-2' />

          </div>
        </div>

        {/*------------------------------------------- sceondDiv --------------------------------------------------------*/}

        <div style={{ width: "100%", maxWidth: "700px", margin: "auto", borderRadius: "20px", color: "white" }} className='mt-2 mx-5 p-3 rigth-container'>
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }} className='mt-5'>
    <div style={{ textAlign: "start" }}>
      <label htmlFor="firstName">First Name</label>
      <br />
      <input style={{ width: "100%", borderBottom: '1px solid white', backgroundColor: "transparent" }} type="text" id="firstName" />
    </div>
    <div style={{ textAlign: "start", marginTop: "10px" }}>
      <label htmlFor="lastName">Last Name</label>
      <br />
      <input style={{ width: "100%", borderBottom: '1px solid white', backgroundColor: "transparent" }} type="text" id="lastName" />
    </div>
  </div>
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }} className='mt-5'>
    <div style={{ textAlign: "start" }}>
      <label htmlFor="email">Email</label>
      <br />
      <input style={{ width: "100%", borderBottom: '1px solid white', backgroundColor: "transparent" }} type="text" id="email" />
    </div>
    <div style={{ textAlign: "start", marginTop: "10px" }}>
      <label htmlFor="phoneNumber">Phone Number</label>
      <br />
      <input style={{ width: "100%", borderBottom: '1px solid white', backgroundColor: "transparent" }} type="number" id="phoneNumber" />
    </div>
  </div>
  <div className='container mt-5' style={{ textAlign: "start" }} >
    <label className='mt-5' htmlFor="message">Message</label>
    <br />
    <input type="text" className='container mt-4' style={{ width: "100%", borderBottom: '1px solid white', backgroundColor: "transparent" }} id="message" />
  </div>
  <div className='container button-div mt-5' style={{ textAlign: "end" }}>
    <button className="button p-2">Send Message</button>
  </div>
</div>



      </div>
      <Footer/>
    </div>
  )
}

export default Contact