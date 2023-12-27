import React, { useState } from 'react'
import Navigation from './Navigation'
import camer from'./camera.json'
import Lottie from 'lottie-react'
import { useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contact from './Contact'
import ImageGallery from './ImageGallery'
const Main = () => {
  const [state,setState]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },4000)
  })
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div style={{ background: 'linear-gradient(to right, #ffbe98, #bba99e)', boxShadow: 'none', textAlign: "center"}}>
      <div className='mb-3'>
        <Navigation />
      </div>
      {state ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

          <div style={{width: "400px", height: "400px" }}>
            <Lottie animationData={camer} />
          </div>

          <div style={{ background: 'linear-gradient(to right, #ffbe98, #bba99e)', boxShadow: 'none', height: "80vh" }}>

          </div>
        </div>
      ) : (
        <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
      <Slider {...settings} style={{alignItems:"center"}}>
        <div>
          <img style={{margin:"auto"}} src="https://files.porsche.com/filestore/image/multimedia/none/socialsharing-fallback/normal/9764fd53-0936-11e5-bccb-001a64c55f5c/porsche-normal.jpg" alt="Image 1" />
        </div>
        <div>
          <img style={{margin:"auto"}}  src="https://w7.pngwing.com/pngs/297/376/png-transparent-2018-porsche-911-porsche-911-gt3-car-porsche-boxster-cayman-porsche-compact-car-convertible-performance-car.png" alt="Image 2" />
        </div>
        <div>
          <img style={{margin:"auto"}}  src="https://e7.pngegg.com/pngimages/313/777/png-clipart-porsche-911-gt3-r-991-sports-car-porsche-compact-car-convertible.png" alt="Image 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
      )}
      <ImageGallery/>
      <Contact/>
    </div>
  )
}

export default Main