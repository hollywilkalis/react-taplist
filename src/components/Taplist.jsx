import React from 'react';
import Tapcard from './Tapcard';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import PropTypes from 'prop-types';

function Taplist(){
  return (
    <div>

      <Grid>
        <Row className="show-grid">
          {masterTapList.map((tapcard, index) =>
            <Col xs={6} md={4}>
              <Tapcard
                name={tapcard.name}
                brand={tapcard.brand}
                price={tapcard.price}
                alcoholContent={tapcard.alcoholContent}
                amountRemaining={tapcard.amountRemaining}
                key={index}
              />
            </Col>
          )}
        </Row>
      </Grid>
    </div>

  );
}

Taplist.PropTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  amountRemaining: PropTypes.amountRemaining
};

export default Taplist;
