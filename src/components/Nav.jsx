import React from "react";
import { Link } from 'react-router-dom';

function Nav(){
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

          }
        `}</style>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="taplist">View our taplist</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
