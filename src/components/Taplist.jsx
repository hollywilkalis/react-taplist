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
            {Object.keys(props.tapList).map(function(tapId) {
                var tapcard = props.tapList[tapId];
                return <Tapcard
                    name={tapcard.name}
                    brand={tapcard.brand}
                    price={tapcard.price}
                    alcoholContent={tapcard.alcoholContent}
                    amountRemaining={tapcard.amountRemaining}
                    currentRouterPath={props.currentRouterPath}
                    onPour={props.onPour}
                    key={tapcard.id}
                    selectedTap={props.selectedTap} />;
            })}
        </div>
    );
}

TapList.PropTypes = {
    tapList: PropTypes.object,
    location: PropTypes.object,
    currentRouterPath: PropTypes.string,
    selectedTap: PropTypes.object,
    onPour: PropTypes.func.isRequired,
};

export default TapList;
