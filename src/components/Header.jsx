import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";


function Header(){
  return (
    <div>
    <style jsx>{`
          div {
            background-color: #162E08;
            height: 200px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          h1 {
            color: white;
          }
        `}</style>
    <Logo />
    <h1>Portland's Cider Bar</h1>
    <Nav />
    </div>

  );
}

export default Header;