import React from 'react';
import Stafftapdisplay from './Stafftapdisplay';

const staffTapList = [
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
function Stafftaplist(){
  return (
    <div>
      <style jsx>{`
      div {
        width: 50%;
        padding: 20px;
      }

      `}</style>
      <h2>Our current taps</h2>
      {staffTapList.map((stafftapdisplay, index) =>
        <Stafftapdisplay
          name={stafftapdisplay.name}
          brand={stafftapdisplay.brand}
          price={stafftapdisplay.price}
          alcoholContent={stafftapdisplay.alcoholContent}
          amountRemaining={stafftapdisplay.amountRemaining}
          key={index}
        />
      )}
    </div>

  );
}


export default Stafftaplist;
