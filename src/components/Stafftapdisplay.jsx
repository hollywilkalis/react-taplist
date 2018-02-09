import React from "react";
import PropTypes from "prop-types";
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';


function Stafftapdisplay(props){
  return (
    <div>
    <style jsx>{`
      `}</style>
        <Panel>
          <Panel.Body>
            <h3>{props.name}</h3>
            <p>{props.brand}</p>
            <Button bsStyle="success">Edit this keg's info</Button>
          </Panel.Body>
        </Panel>
    </div>

  );
}

Stafftapdisplay.PropTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  amountRemaining: PropTypes.amountRemaining
};

export default Stafftapdisplay;
