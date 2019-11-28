import React from 'react';
import { Fade } from 'react-slideshow-image';
 
const fadeImages = [
  '/assets/images/movies/1.jpg',
  '/assets/images/movies/2.jpg',
  '/assets/images/movies/3.jpg'
];

const data=[1,2,3,4,5,6,7,8,9,10];


let RendFade=()=>{



  for(let i=0;i<=data; i+=3){
    data.slice(i,i+3).map(<h2>(</h2> =>{});


}

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        {RendFade()};
      </Fade>
    </div>
  )
}

export default Slideshow;