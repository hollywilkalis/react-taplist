import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';


function Tapcard(props){

  const tapInformation =
    <div>
      <h4>{props.brand}</h4>
      <h3>{props.name}</h3>
      <p>Alcohol Content: {props.alcoholContent}<br/>
      Price: {props.price}<br/>
      Amount remaining in keg: {props.amountRemaining}</p>
      <Button bsStyle="success"
        onClick={() =>
        {props.onPour(props.tapId);}}>
        Sell a pint</Button>
    </div>;


  if (props.currentRouterPath === '/admin'){
    return (
      <div>
        <style jsx>{`
            div {
              margin: 10px;
            }

          `}</style>
        <li>{props.brand}, {props.name}, {props.amountRemaining} pints remaining in keg</li>
      </div>
    );
  } else {
    return (
      <div className="tap-card">
        <style jsx>{`
            div {
              padding: 10px;
              float: left;
            }
            .tap-card {
              border: solid 2px #26510d;
              margin: 10px;
              border-radius: 20px;
              padding: 20px;
            }
            h1 {
              color: white;
              font-family: 'Josefin Sans', sans-serif;
              font-weight: bold;
            }
          `}</style>

        <div onClick={() => {props.onPour(props.tapId);}}>
          {tapInformation}
        </div>
      </div>
    );
  }
}

Tapcard.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  amountRemaining: PropTypes.number,
  key: PropTypes.string,
  location: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onPour: PropTypes.func,

};

export default Tapcard;
