import React, { Component } from "react";
 
import Consoles from '../Consoles/Consoles.js';

class Sales extends Component {
  render() {
    return (
      <div>
        <h2>What we sell/Repair</h2>
          <Consoles />
      </div>
    );
  }
}
 
export default Sales;