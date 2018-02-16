import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';


function Tapcard(props){
  const tapInformation =
    <div>

        {props.brand}
          <h3>{props.name}</h3>
          <p>Alcohol Content: {props.alcoholContent}<br/>
            Price: {props.price}<br/>
            Amount remaining in keg: {props.amountRemaining}</p>
          <Button bsStyle="success">Sell a pint</Button>

    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div>
      hey, you just found the route belongin to Admin
      {tapInformation}

      </div>
      );
  } else {
    return (
      <div>
        {tapInformation}
      </div>
    );
  }
}

Tapcard.PropTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  amountRemaining: PropTypes.number,
  key: PropTypes.string,
  location: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Tapcard;
