import React from 'react';
import Home from './Home';
import TapList from './TapList';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';


class Body extends React.Component {
    constructor(props) {
      super(props) ;
      this.state = {
      masterTapList: {
        1: {
          name: 'Made Marion',
          brand: '2 Towns',
          price: 4,
          alcoholContent: 6,
          amountRemaining: 124,
        },
        2: {
          name: 'Boysenberry Lemonade',
          brand: 'Baumans',
          price: 6,
          alcoholContent: 6.2,
          amountRemaining: 124,
        },
        3: {
          name: 'Poire',
          brand: 'Christian Drouin',
          price: 5,
          alcoholContent: 4,
          amountRemaining: 124,
        },
        4: {
          name: 'Oregon Wild',
          brand: 'Portland Cider Company',
          price: 8,
          alcoholContent: 5.8,
          amountRemaining: 124,
        }
      },
      selectedTap: null
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
    this.handlePintPour = this.handlePintPour.bind(this);
  }

  handleAddingNewTapToList(newTap) {
    let newMasterTapList = Object.assign({}, this.state.masterTapList, {
      [newTap.id]: newTap
    });
    this.setState({masterTapList: newMasterTapList});
  }

  handlePintPour(tapId) {
    this.setState({selectedTap: tapId});
    alert("poured!");
  }

  render(){
    console.log(this.state.masterTapList);
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' render={(props)=><Admin
            currentRouterPath={props.location.pathname} tapList={this.state.masterTapList} onNewTapCreation={this.handleAddingNewTapToList} />}  />
          <Route path='/taplist' render={(props)=><TapList   tapList={this.state.masterTapList}    onPour={this.handlePintPour}
          selectedTap={this.state.selectedTap} />} />
        </Switch>
      </div>
    );
  }
}

export default Body;
