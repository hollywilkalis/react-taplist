import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';


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
          <h3>{props.name}</h3>
          <p>Alcohol Content: {props.alcoholContent}<br/>
            Price: {props.price}<br/>
            Amount remaining in keg: {props.amountRemaining}</p>
          <Button bsStyle="success">Sell a pint</Button>
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
  amountRemaining: PropTypes.amountRemaining,
  key: PropTypes.string
};

export default Tapcard;
