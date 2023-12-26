import React, { useState } from 'react';
import photo from './SFT06393.JPG'
import './ImageGallery.module.css'

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([
    {imag:photo,id:1},
    {imag:photo,id:2},
    {imag:photo,id:3},
  ])
  const handleImageClick = (index) => {
    setSelectedImage(index === selectedImage ? null : index);
    images[0].id=10
  };


  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.imag}
          alt={`Image ${index + 1}`}
          style={{
            cursor: 'pointer',
            width: index === selectedImage||image.id==1 ? '600px' : '200px',
            height: 'auto',
            margin: '5px',
          }}
          onClick={() => handleImageClick(index)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
