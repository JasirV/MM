import React, { useEffect, useState } from 'react';
import photo from './photo.jpg'
import './ImageGallery.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([
    { imag: photo, id: 1, title: "Wedding", description: "lorisumsomewords in look for the good for the websie" },
    { imag: photo, id: 2, title: "Baby", description: "lorisumsomewords in look for the good for the websie" },
    { imag: photo, id: 3, title: "Fest", description: "lorisumsomewords in look for the good for the websie" },
  ])
  const handleImageClick = (index) => {
    setSelectedImage(index === selectedImage ? null : index);
    images[0].id = 10
  };
  useEffect(() => {
    Aos.init();
  }, [])


  return (
    <div id='services' className='mb-5 '>
      <h1 className='mt-5 mb-4'>Products</h1>
      <div className='image-container' style={{ display: "flex", justifyContent: "center", justifyItems: "center" }} >
        {images.map((image, index) => (
          <div data-aos="fade-rigth">
            <img className='img-photo' data-aos="fade-left"
              key={index||image.id}
              src={image.imag}
              alt={`Image ${index + 1}`}
              style={{
                cursor: 'pointer',
                width: index == selectedImage || image.id == 1 ? '500px' : '100px',
                height: '500px',
                maxHeight:'600px',
                filter: index == selectedImage || image.id == 1 ? 'blur(0px)' : 'blur(2px)',
                margin: '5px',
              }}

              onClick={() => handleImageClick(index)}
            />
            {index === selectedImage || image.id === 1 ? (
              <div >
                <h6>{image.title}</h6>
                <p>{image.description}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
