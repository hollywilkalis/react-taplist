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
      masterTapList: {},
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

  handlePintPour(tap) {
    this.setState({selectedTap: tap});
    alert("poured!");
  }

  render(){
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
