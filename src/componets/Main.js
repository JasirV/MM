import React, { useState } from 'react'
import Navigation from './Navigation'
import camer from'./camera.json'
import Lottie from 'lottie-react'
import { useEffect } from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'
import image from'./Wedding-Shoppe-Inc-2024-Wedding-Colors-Popular_1_1024x1024-removebg-preview.png'
import image2 from './Wedding-Trends-You-Are-About-to-Spot-in-2023-2_11zon-removebg-preview.png'
// import videoclip from './WEDDING HIGHLIGHTS.mp4'
const Main = () => {
  const [state,setState]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },4000)
  })
  console.log(state);
  return (
    <div style={{ background: 'linear-gradient(to right, #ffbe98, #bba99e)', boxShadow: 'none',  textAlign: "center", height: "100vh"}}>
      <div>
        <Navigation />
      </div>
      {state ?(
      <div style={{display:"flex", justifyContent:"center", alignItems:"center" }}>
        
      <div style={{ backgroundColor: "red", width:"400px", height:"400px"}}>
        <Lottie animationData={camer} />
      </div>

      <div style={{ background: 'linear-gradient(to right, #ffbe98, #bba99e)', boxShadow: 'none', height: "80vh" }}>

      </div>
      </div>
      ):(
        <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src={image} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={image} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        {/* <video controls className='d-block w-100'>
        <source src={videoclip} type='video/mp4' />
        Your browser does not support the video tag.
      </video> */}
      </MDBCarouselItem>
    </MDBCarousel>
      )}
    </div>
  )
}

export default Main