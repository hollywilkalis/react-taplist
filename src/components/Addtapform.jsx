import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function AddTapForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _amountRemaining = null;


  function handleAddTapFormSubmission(event) {
    event.preventDefault();

    props.onNewTapCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, amountRemaining: _amountRemaining.value, id: v4()});
    _name.value = '';
    _brand = '';
    _price = '';
    _alcoholContent = '';
    _amountRemaining = '';
    alert('Your new tap has been added!');
  }

  return (
    <div>
      <style jsx>{`
        div {
          width: 60%;
          padding: 20px
          border: solid 1px gray;
          }
        input {
          width: 100%;
          margin-bottom: 10px;
        }
        label {
          margin-top: 15px;
        }
        Button {
          margin-top: 10px;
        }
      `}</style>
      <form onSubmit={handleAddTapFormSubmission}>
        <h4>Add a new tap</h4>
        <label>Cider name:</label>
        <input
          type="text"
          id="name"
          placeholder="Name of cider"
          ref={(input) => {_name = input;}}/>

        <label>Brand:</label>
        <input
          type="text"
          id="brand"
          placeholder="Brand of cider"
          ref={(input) => {_brand = input;}}/>

        <label>Price per pint:</label>
        <input
          type="number"
          id="price"
          placeholder="Price per pint"
          ref={(input) => {_price = input;}}/>

        <label>ABV %:</label>
        <input
          type="number"
          id="alcoholContent"
          placeholder="ABV %"
          ref={(input) => {_alcoholContent = input;}}/>

        <label>Amount in keg:</label>
        <input
          type="number"
          id="amountRemaining"
          placeholder="Number of pints currently in keg"
          ref={(input) => {_amountRemaining = input;}}/>

        <Button bsStyle="success" type="submit">Add this keg</Button>

      </form>

    </div>

  );
}

AddTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default AddTapForm;
