import React from 'react';
import Tapcard from './Tapcard';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function TapList(props){
  console.log(props.tapList);
  return (

    <div>
      <Grid>
        <Row className="show-grid">
          {props.tapList.map((tapcard) =>
            <Col xs={6} md={4}>
              <Tapcard
                name={tapcard.name}
                brand={tapcard.brand}
                price={tapcard.price}
                alcoholContent={tapcard.alcoholContent}
                amountRemaining={tapcard.amountRemaining}
                currentRouterPath={props.currentRouterPath}
                id={tapcard.id}/>

            </Col>
          )}
        </Row>
      </Grid>
    </div>
  );
}

TapList.PropTypes = {
  tapList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default TapList;
