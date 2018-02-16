import React from 'react';
import Tapcard from './Tapcard';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
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
        `}</style>

          {props.tapList.map((tapcard) =>
              <Tapcard
                name={tapcard.name}
                brand={tapcard.brand}
                price={tapcard.price}
                alcoholContent={tapcard.alcoholContent}
                amountRemaining={tapcard.amountRemaining}
                currentRouterPath={props.currentRouterPath}
                id={tapcard.id}/>
          )}

    </div>
  );
}

TapList.PropTypes = {
  tapList: PropTypes.array,
  location: PropTypes.object,
  currentRouterPath: PropTypes.string
};

export default TapList;
