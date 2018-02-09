import React from "react";
import Button from 'react-bootstrap/lib/Button';


function Addtapform(){
  return (
    <div>
    <style jsx>{`
      div {
        padding: 20px
        border: solid 1px gray;
        }
      input {
        width: 100%;
      }
      label {
        margin-top: 15px;
      }

      `}</style>
        <form>
          <h4>Add a new tap</h4>
          <label>Cider name:</label>
            <input type="text" name="name" />
          <label>Brand:</label>
            <input type="text" name="brand" />
          <label>Price per pint:</label>
            <input type="number" name="price" />
          <label>ABV %:</label>
            <input type="number" name="alcoholContent" />
          <label>Amount in keg:</label>
            <input type="text" name="amountRemaining" />

          <Button bsStyle="success">Add this keg</Button>

        </form>

    </div>

  );
}

export default Addtapform;
