import Slider from './Slider'
import TopMobiles from './TopMobiles'
import LatestMobile from './LatestMobile'
import UpcomingMobiles from './UpcomingMobiles'
import MobileBrands from './MobileBrands'
import './styles/Home.css'
import React from 'react';
import Footer from './Footer'
import KnowUs from './KnowUs'



function Home(){
    return(
      <div className='mainContainer'>
        <div className='homeContainer'>
          <Slider/>
          <TopMobiles/>
          <MobileBrands/>
          <LatestMobile/>
          <UpcomingMobiles/>
        </div>
        <KnowUs/>
        <Footer/>
      </div>
      
    )
}
export default Home

















/*
import './styles/Home.css'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

 const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '80vh',
  
    
    
  }
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    },
  ];


function Home(){
    return (
        <div className="slide-container">
          <Slide>
            
            {slideImages.map((slideImage, index)=> (
                <div key={index}>
                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                    <span style={spanStyle}>{slideImage.caption}</span>
                    </div>
                </div>
                ))} 

          </Slide>
        </div>
      )
}

export default Home */