import React from 'react'
import './contact.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Footer } from './Footer';
const Contact = () => {
  return (
    <div className='mt-3'>
      <div style={{ margin: "auto" }} className='mt-5 mb-5'>
        <h1 style={{ color: "black", fontWeight: "700" }}>Contact Us</h1>
        <h5>Any question or remarks? Just write us a message!</h5>
      </div>
      <div className='mt-3' style={{ width: "1150px", height: "600px", padding: "5px", borderRadius: "20px",boxShadow:"0 0 15px #333", background: "rgba(0,0,0,0.1)", backdropFilter: "blur(10px)", margin: "auto", display: "flex" }}>
        <div style={{ width: "450px", height: "570px", backgroundColor: "black", borderRadius: "20px" ,display:"flex" ,flexDirection:"column",justifyContent:"space-around", color:"white"}} className='mt-2 mx-2 p-2'>
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

        <div style={{ width: "700px", height: "570px", borderRadius: "20px",color:"white"}} className='mt-2 mx-5 p-3'>
          <div style={{ display: "flex", justifyContent: "space-evenly" }} className='mt-5'>
            <div style={{ textAlign: "start" }}>
              <label for="username">First Name</label>
              <br />
              <input style={{ borderBottom: '1px solid white', borderLeft: 'none', borderTop: 'none', borderRight: 'none', backgroundColor: "transparent" }} type="text" />
            </div>
            <div style={{ textAlign: "start" }}>
              <label for="username">Last Name</label>
              <br />
              <input type="text" style={{ borderBottom: '1px solid white', borderLeft: 'none', borderTop: 'none', borderRight: 'none', backgroundColor: "transparent" }} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }} className='mt-5'>
            <div style={{ textAlign: "start" }}>
              <label for="username">Email</label>
              <br />
              <input type="text" style={{ borderBottom: '1px solid white', borderLeft: 'none', borderTop: 'none', borderRight: 'none', backgroundColor: "transparent" }} />
            </div>
            <div style={{ textAlign: "start" }}>
              <label for="username">Phone Number</label>
              <br />
              <input type="number" style={{ borderBottom: '1px solid white', borderLeft: 'none', borderTop: 'none', borderRight: 'none', backgroundColor: "transparent" }} />
            </div>
          </div>
          <div className='container mt-5' style={{ textAlign: "start" }} >
            <label className='mt-5' for="username">message</label>
            <br />
            <input type="text" className='container mt-4' style={{ borderBottom: '1px solid white', borderLeft: 'none', borderTop: 'none', borderRight: 'none', backgroundColor: "transparent" }} />
          </div>
          <div className='container mt-5' style={{ textAlign: "end" }}>
            <button className="button p-2">Send Message</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact