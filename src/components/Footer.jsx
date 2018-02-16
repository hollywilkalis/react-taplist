import React from 'react';
import { Link } from 'react-router-dom';


function Footer(){
  const links = {
    color: 'black',
  };

  return (
    <div>
      <style jsx>{`
          div {
            height: 100px;
          }
          p {
            font-size: 12px;
            color: black;
            text-align: right;
            padding: 10px;
          }
        `}</style>
      <p><Link to="admin" style={links}>Admin login</Link></p>
    </div>

  );
}

export default Footer;
