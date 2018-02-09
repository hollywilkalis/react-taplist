import React from "react";
import { Link } from 'react-router-dom';

function Nav(props){
  var links = {
    color: '#ecf0f1',
  }
  return (
    <div>
      <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding: 40px;
          }
          ul {
          }
          li {
            color: white;
            font-size: 20px;
            list-style: none;
          }
          Link {
            text-decoration: none;
            color: white;
          }

          Link:visited {
            color: white;
          }
        `}</style>
      <ul>
        <li><Link to="/" style={links}>Home</Link></li>
        <li><Link to="taplist" style={links}>View our taplist</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
