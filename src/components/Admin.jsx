import React from "react";
import Stafftaplist from "./Stafftaplist";
import Addtap from "./Addtap";


function Admin(){
  return (
    <div>
    <style jsx>{`
      div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      h1 {
        color: white;
      }
    `}</style>
      <Stafftaplist />
      <Addtap />

    </div>

  );
}

export default Admin;
