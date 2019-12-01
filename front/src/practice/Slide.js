import React from "react";
import { Fade } from "react-slideshow-image";


const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
};

let renderFadeChild = () => {
  let jsx = [];
  for (let i = 0; i < testData.length; i += 3) {
    let tmp = testData.slice(i, i + 3).map((item, index) => <h2 key={index}>{item}</h2>);
    jsx.push(tmp);
  }
  return jsx;
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>{renderFadeChild()}</Fade>
    </div>
  );
};

export default Slideshow;
