import React from "react";
import Tapcard from './Tapcard';

var masterTapList = [
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
    <div>Taplist works
    <Tapcard />
    </div>

  );
}

export default Taplist;
