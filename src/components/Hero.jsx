import React from "react";
import hero from '../assets/images/apples.jpg';


function Hero(){
  const divStyle = {
    backgroundImage: `url(${hero})`,
    height: 400,
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    padding: 40,
    display: 'flex',
    justifyContent: 'flex-end'
};
  const heroText = {
    textAlign: 'right',
    fontFamily: 'Josefin Sans',
    fontWeight: 'bold',
    fontSize: 50,
    width: '35%',
    color: '#162E08'
  }
  return (
    <div style={divStyle}>
    <p style={heroText}>Only the best ciders in Portland</p>

    </div>
  );
}

export default Hero
