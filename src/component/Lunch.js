import React, { Component } from 'react';
import Button from './Button';

const menu = require("../data/lunchdata")
class lunchmenu extends Component {
  constructor() {
    super();
    this.state = {
      menu,
    }
  }
  render() {
    const menulunch = menu.lunch.map((product) => {
      return (
        <Button rol={product.item + "" + product.price} customOnButtonClick={() => { this.props.nameProduct(menulunch) }} />
      )
    })
    return (
      <div id="secondboxitem">
       {menulunch}
      </div>

    );
  }
}
export default (lunchmenu);