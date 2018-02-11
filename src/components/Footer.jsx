import React from 'react';
import { Link } from 'react-router-dom';


function Footer(){
  const links = {
    color: '#ecf0f1',
  };
  
  return (
    <div>
      <style jsx>{`
          div {
            background-color: #26510d;
            height: 100px;
          }
          p {
            font-size: 12px;
            color: white;
            text-align: right;
            padding: 10px;
          }
        `}</style>
      <p><Link to="admin" style={links}>Admin login</Link></p>
    </div>

  );
}

export default Footer;
