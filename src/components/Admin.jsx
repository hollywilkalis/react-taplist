import React from 'react';
import AddTapForm from './AddTapForm';
import PropTypes from 'prop-types';
import TapList from './TapList';


class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true
    };
  }

  render(){
    if (this.state.formVisibleOnPage) {
      return (
        <div className="admin-display">

          <style jsx>{`
            .admin-display {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
            }
            h1 {
              color: white;
            }
            .tap-form {
              width: 40%;
              min-width: 250px;
            }
            .tap-display {
              width: 50%;
              min-width: 250px;
            }


          `}</style>
          <div className="tap-display">
            <TapList tapList={this.props.tapList}
              currentRouterPath={this.props.currentRouterPath}/>
          </div>
          <div className="tap-form">
            <AddTapForm onNewTapCreation={this.props.onNewTapCreation}/>
          </div>

        </div>

      );
    }
  }
}

Admin.PropTypes = {
  onNewTapCreation: PropTypes.func,
  tapList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  selectedTap: PropTypes.string
};

export default Admin;
