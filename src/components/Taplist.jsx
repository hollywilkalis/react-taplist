import React from 'react';
import Tapcard from './Tapcard';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import PropTypes from 'prop-types';

const masterTapList = [
  {
    name: 'Made Marion',
    brand: '2 Towns',
    price: 4,
    alcoholContent: 6,
    amountRemaining: 124
  },
  {
    name: 'Boysenberry Lemonade',
    brand: 'Baumans',
    price: 6,
    alcoholContent: 6.2,
    amountRemaining: 124
  },
  {
    name: 'Poire',
    brand: 'Christian Drouin',
    price: 5,
    alcoholContent: 4,
    amountRemaining: 124
  },
  {
    name: 'Oregon Wild',
    brand: 'Portland Cider Company',
    price: 8,
    alcoholContent: 5.8,
    amountRemaining: 124
  }
];
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
