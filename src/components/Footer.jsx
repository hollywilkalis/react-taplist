import React from "react";
import { Link } from 'react-router-dom';


function Footer(){
  return (
    <div>
    <style jsx>{`
          div {
            background-color: #162E08;
            height: 100px;
          }
          p {
            font-size: 12px;
            color: white;
            text-align: right;
            padding: 10px;
          }
        `}</style>
      <p><Link to="admin">Admin login</Link></p>
    </div>

  );
}

export default Footer;
