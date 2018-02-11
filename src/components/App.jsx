import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


function App(){
  <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        Link {
          text-decoration: none;
        }

        Link:visited {
          color: white;
        }
      `}</style>;
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
