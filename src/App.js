import React, { Component } from 'react';
import './App.css';
import Slider from "./slider/slider";
class App extends Component {
  
  render() {
    // Provide image links in below "images" array, remove sample links to add images.
     const images=[
        '//placehold.it/1800x800',
        '//placehold.it/1800x800/888',
        '//placehold.it/1800x800/444',
        '//placehold.it/1800x800/222'
      ];
      // Provide the parameters along with proper value to slide the images
      // Mandatory Fileds 1. sliderID, 2. dataride, 3. datainterval
      // Optional Fileds 1. datapause.
      const settings={
                  dataride:"carousel",
                  datainterval:5000,
                  datapause:"hover",
                  sliderID:"demoSlider"

                };
    return (
      <div className="container">
       <Slider settings={settings}>

        <div className="item active" >
           <img src="//placehold.it/1800x800"   alt="sliderImage" data-animation="animated bounceInLeft"/>
        </div>

        <div className="item" >
         <img src="//placehold.it/1800x800/888" alt="sliderImage" data-animation="animated bounceInLeft"/>
        </div>

         <div className="item" >
         <img src="//placehold.it/1800x800/444" alt="sliderImage" data-animation="animated bounceInLeft"/>
         </div>

        <div className="item" >
         <img src="//placehold.it/1800x800/222" alt="sliderImage" data-animation="animated bounceInLeft"/>
         </div>
       </Slider>
      </div>
    );
  }
}
export default App; 
