import React from 'react';
import Featured from './Featured';
import About from './About';
import Hero from './Hero';

function Home(){
  return (
    <div>
      <style jsx>{`
      div {
        display: flex;
        flex-wrap: wrap;
      }
    `}</style>
      <Hero />
      <Featured />
      <About />
    </div>

  );
}

export default Home;
