import React from 'react'
import './contact.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
const Contact = () => {
  return (
    <div>
        <div style={{margin:"auto"}} className='mt-3'>
        <h1 style={{color:"black",fontWeight:"700"}}>Contact Us</h1>
        <h5>Any question or remarks? Just write us a message!</h5>
        </div>
        <div className='mt-3' style={{width:"1150px",height:"600px", padding:"5px",borderRadius:"20px", backgroundColor:"red",margin:"auto",display:"flex"}}>
       <div style={{width:"450px" ,height:"570px", backgroundColor:"blue", borderRadius:"20px"}} className='mt-2 mx-2 p-2'>
        <div>
            <h1>Contact Information</h1>
            <h5>Say something to start a live chat!</h5>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div style={{display:"flex"}}>
        <FaInstagram className='m-2'/>
        <FaSquareFacebook  className='m-2'/>
        <IoLogoWhatsapp className='m-2'/>
        <IoLogoYoutube className='m-2'/>

        </div>
       </div>

{/*------------------------------------------- sceondDiv --------------------------------------------------------*/}
       
       <div style={{width:"700px" ,height:"570px", backgroundColor:"green", borderRadius:"20px"}} className='mt-2 mx-5 p-3'>
       <div style={{display:"flex", justifyContent:"space-evenly"}} className='mt-5'>
        <div style={{textAlign:"start"}}>
       <label  for="username">First Name</label>
       <br />
       <input style={{ borderBottom: '1px solid black', borderLeft: 'none', borderTop: 'none', borderRight: 'none' ,backgroundColor:"transparent" }} type="text" />
        </div>
       <div style={{textAlign:"start"}}>
       <label for="username">Last Name</label>
       <br />
        <input type="text" style={{ borderBottom: '1px solid black', borderLeft: 'none', borderTop: 'none', borderRight: 'none' ,backgroundColor:"transparent" }}  />
        </div>
        </div>
       <div style={{display:"flex", justifyContent:"space-evenly"}} className='mt-5'>
        <div style={{textAlign:"start"}}>
       <label for="username">Email</label>
       <br />
        <input type="text" style={{ borderBottom: '1px solid black', borderLeft: 'none', borderTop: 'none', borderRight: 'none' ,backgroundColor:"transparent" }} />
        </div>
       <div style={{textAlign:"start"}}>
       <label for="username">Phone Number</label>
       <br />
        <input type="number" style={{ borderBottom: '1px solid black', borderLeft: 'none', borderTop: 'none', borderRight: 'none' ,backgroundColor:"transparent" }}/>
        </div>
        </div>
        <div className='container mt-5' style={{textAlign:"start"}} >
       <label className='mt-5' for="username">message</label>
       <br />
        <input  type="text" className='container mt-4' style={{ borderBottom: '1px solid black', borderLeft: 'none', borderTop: 'none', borderRight: 'none' ,backgroundColor:"transparent" }}/>
        </div>
        <div className='container mt-5' style={{textAlign:"end"}}>
        <button className="button p-2">Send Message</button>
        </div>
       </div>
        </div>
        </div>
  )
}

export default Contact