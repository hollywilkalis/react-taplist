import React from 'react';
import Tapcard from './Tapcard';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function TapList(props){
  return (

    <div className="clearfix">
      <style jsx>{`
        div {
          padding: 10px;
        }
        .clearfix {
          overflow: auto;
        }
        h3 {
          color: #26510d;
          text-align: center;
          font-size: 30px;
          font-family: 'Josefin Sans';
        }
        `}</style>
      <h3>Our current taps</h3>
      {props.tapList.map((tapcard) =>
        <Tapcard
          name={tapcard.name}
          brand={tapcard.brand}
          price={tapcard.price}
          alcoholContent={tapcard.alcoholContent}
          amountRemaining={tapcard.amountRemaining}
          currentRouterPath={props.currentRouterPath}
          onPour={props.onPour}
          id={tapcard.id}
          />
      )}

    </div>
  );
}

TapList.PropTypes = {
  tapList: PropTypes.array,
  location: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onPour: PropTypes.func
};

export default TapList;
