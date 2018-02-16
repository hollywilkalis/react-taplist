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
              justify-content: space-between;
            }
            h1 {
              color: white;
            }
            .half {
              width: 50%;
            }

          `}</style>
          <div className="half">
            <AddTapForm onNewTapCreation={this.props.onNewTapCreation}/>
          </div>
          <div className="half">
            <TapList tapList={this.props.tapList}/>
          </div>

        </div>

      );
    }
  }
}

Admin.PropTypes = {
  onNewTapCreation: PropTypes.func,
  tapList: PropTypes.array

};

export default Admin;
