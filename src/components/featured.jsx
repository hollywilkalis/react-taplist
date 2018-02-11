import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import cider from '../assets/images/cider.jpg';



function Featured(){
  return (
    <div>
      <style jsx>{`
      div {
        background-color: #93cc72;
        width: 50%;
        padding: 10px;
      }
      h3 {
        color: #93cc72;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
      }
      h4 {
        color: #93cc72;
      }
      img {
        height: 150px;
        float: right;
      }
      p {
        font-size: 20px;
        text-align: center;
        padding: 5%;
      }
    `}</style>
      <Panel bsStyle="success">
        <Panel.Heading>
          <Panel.Title componentClass="h4">February's Featured Cider</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <img src={cider}/>
          <h3>J.K.'S Northern Neighbor Farmhouse Cider Saskatoon Cuvee</h3>
          <h4>From Almar Orchards</h4>
          <h5>This month we celebrate a collaboration of a few passionate American and Canadian farmers. The fruits of their labor are presented in this bottle, a family reunion of sorts. This delightful cider is made from Michigan apples and a unique Canadian prairie apple, the Saskatoon. Gathered by J.K. from family orchards in Michigan and Saskatchewan, this natural cider has been carefully fermented at Almar Orchards using our traditional methods. We hope you enjoy sharing this cider that knows no borders with friends, family, and neighbors.</h5>
        </Panel.Body>
      </Panel>
      <p>See our Taplist page for a complete list of all ciders currently available on tap in our pub.</p>



    </div>

  );
}

export default Featured;
