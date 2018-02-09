import React from "react";
import hero from '../assets/images/apples.jpg';


function Hero(){
  const divStyle = {
    backgroundImage: `url(${hero})`,
    height: 400,
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    padding: 40,
    textAlign: 'right'
};
  return (
    <div style={divStyle}>
    lorem ipsum

    </div>
  );
}

export default Hero
