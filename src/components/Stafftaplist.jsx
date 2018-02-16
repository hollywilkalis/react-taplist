import React from 'react';
import StaffTapDisplay from './StaffTapDisplay';
import PropTypes from 'prop-types';


function StaffTapList(props){
  return (
    <div>
      <style jsx>{`
      div {
        width: 50%;
        padding: 20px;
      }

      `}</style>
      <h2>Our current taps</h2>
      {props.staffTapList.map((stafftapdisplay, index) =>
        <StaffTapDisplay
          name={stafftapdisplay.name}
          brand={stafftapdisplay.brand}
          price={stafftapdisplay.price}
          alcoholContent={stafftapdisplay.alcoholContent}
          amountRemaining={stafftapdisplay.amountRemaining}
          key={index}/>
      )}
    </div>
  );
}

StaffTapList.propTypes = {
  staffTapList: PropTypes.array
};

export default StaffTapList;
