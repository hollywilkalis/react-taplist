import React from 'react';
import Home from './Home';
import Taplist from './Taplist';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';


function Body(){
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

export default Body;
