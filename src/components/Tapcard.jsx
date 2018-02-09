import React from "react";
import PropTypes from "prop-types";
import Panel from 'react-bootstrap/lib/Panel';



function Tapcard(props){
  return (
    <div>
    <style jsx>{`
        div {
          margin-top: 10px;
        }
        
      `}</style>
        <Panel>
          <Panel.Heading>{props.brand}</Panel.Heading>
          <Panel.Body>
            <Panel.Title componentClass="h4">{props.name}</Panel.Title>
            <p>Alcohol Content: {props.alcoholContent}<br/>
            Price: {props.price}<br/>
            Amount remaining in keg: {props.amountRemaining}</p>
          </Panel.Body>
        </Panel>
    </div>

  );
}

Tapcard.PropTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  amountRemaining: PropTypes.amountRemaining
};

export default Tapcard;
