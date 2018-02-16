import React from 'react';
import Home from './Home';
import TapList from './TapList';
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
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
  }

  handleAddingNewTapToList(newTap) {
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newTap);
    this.setState({masterTapList: newMasterTapList});
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' render={()=><Admin onNewTapCreation={this.handleAddingNewTapToList}tapList={this.state.masterTapList} /> }  />
          <Route path='/taplist' render={()=><TapList tapList={this.state.masterTapList} />} />
        </Switch>
      </div>
    );
  }
}

export default Body;
