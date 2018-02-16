import React from 'react';
import Home from './Home';
import Taplist from './Taplist';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';


class Body extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = {
      masterTapList: [
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
      ]
    };
  }
  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={Admin} />
          <Route path='/taplist' component={Taplist} />
        </Switch>
      </div>
    );
  }
}

export default Body;
