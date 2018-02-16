import React from 'react';
import Stafftaplist from './Stafftaplist';
import AddTapForm from './AddTapForm';
import PropTypes from 'prop-types';


class Admin extends React.Component {

  render(){
    return (
      <div>

        <style jsx>{`
          div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          h1 {
            color: white;
          }
        `}</style>
        
        <Stafftaplist />
        <AddTapForm onNewTapCreation={this.props.onNewTapCreation}/>

      </div>

    );
  }
}

Admin.PropTypes = {
  onNewTapCreation: PropTypes.func
};

export default Admin;
