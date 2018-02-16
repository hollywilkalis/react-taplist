import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';


function StaffTapDisplay(props){
  return (
    <div>
      <style jsx>{`
      `}</style>
      
    </div>

  );
}

StaffTapDisplay.PropTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  amountRemaining: PropTypes.number
};

export default StaffTapDisplay;
