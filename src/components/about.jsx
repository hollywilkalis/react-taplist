import React from 'react';



function About(){
  return (
    <div>
      <style jsx>{`
      div {
        width: 45%;
        padding: 30px;
      }
      h3 {
        color: #93cc72;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
        font-size: 25px;
        text-align: center;
      }
      h4 {
        color: #93cc72;
        font-weight: bold;
      }
    `}</style>
      <h3>About Us</h3>
      <h4>Our hours</h4>
      <ul>
        <li>Sunday – Thursday: noon to 10pm</li>
        <li>Friday & Saturday: noon to 11pm</li>
      </ul>
      <h4>Our location</h4>
      <p>1212-D SE Powell<br/>
    Portland, OR 97202</p>

      <p>We opened Portland's Cider House  in the fall of 2010 as Portland’s first cidery and the country’s original cider pub. Starting with every cider available in Oregon, we had a measly selection of 35 bottles. This selection has exploded to over 350 bottles of cider, perries and pommeau from around the country and around the world. Located in Portland’s historic Brooklyn neighborhood our small pub quickly became a place to chat with neighbors and enjoy the diverse flavors that can be found in the cider world.</p>

      <p>Our pub hosts our small batch cidery and one of the largest selections of ciders to be found!</p>

      <p>Sorry no minors allowed. Friendly dogs are okay on our patio! Woof!</p>
    </div>


  );
}

export default About;
