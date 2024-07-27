import React from 'react';
import img3 from './assets/iphones.png'
import img1 from './assets/oppo.jpg'
import img2 from './assets/realmes.jpeg'
import img4 from './assets/vivos.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles/Slider.css'

function Slider(){
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2560, min: 1441 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return(

<div className='slide-container'>
    <Carousel responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite= {true}
      infiniteLoop={true}>
        <div>
          <img src={img1} className='sliderImage'></img>         
        </div>
        <div>
          <img src={img2} className='sliderImage'></img>
        </div>
        <div>
          <img src={img3} className='sliderImage'></img>
        </div>
        <div>
          <img src={img4} className='sliderImage'></img>
        </div>
  </Carousel>
</div>
  )
}

export default Slider
