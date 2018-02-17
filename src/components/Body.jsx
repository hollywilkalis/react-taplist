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
      masterTapList: [
        {
          name: 'Made Marion',
          brand: '2 Towns',
          price: 4,
          alcoholContent: 6,
          amountRemaining: 124,
          id: v4()
        },
        {
          name: 'Boysenberry Lemonade',
          brand: 'Baumans',
          price: 6,
          alcoholContent: 6.2,
          amountRemaining: 124,
          id: v4()
        },
        {
          name: 'Poire',
          brand: 'Christian Drouin',
          price: 5,
          alcoholContent: 4,
          amountRemaining: 124,
          id: v4()
        },
        {
          name: 'Oregon Wild',
          brand: 'Portland Cider Company',
          price: 8,
          alcoholContent: 5.8,
          amountRemaining: 124,
          id: v4()
        }
      ]
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
    this.handlePintPour = this.handlePintPour.bind(this);
  }

  handleAddingNewTapToList(newTap) {
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newTap);
    this.setState({masterTapList: newMasterTapList});
  }

  handlePintPour() {
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.amountRemaining -= 1;
    this.setState({masterTapList: newMasterTapList});
    alert('pint is poured');
    console.log(this.state.newMasterTapList.amountRemaining);
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' render={(props)=><Admin
            currentRouterPath={props.location.pathname} tapList={this.state.masterTapList} onNewTapCreation={this.handleAddingNewTapToList} />}  />
          <Route path='/taplist' render={()=><TapList tapList={this.state.masterTapList} onPour={this.handlePintPour} />} />
        </Switch>
      </div>
    );
  }
}

export default Body;
