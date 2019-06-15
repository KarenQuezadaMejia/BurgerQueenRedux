import React, { Component } from 'react';
import Button from './Button';

const menu = require("../data/breakfastdata")
class breakfastmenu extends Component {
  constructor() {
    super();
    this.state = {
      menu,
    }
  }
  render() {
    const menubreakfast = menu.breakfast.map((product) => {
      return (
        <Button rol={product.item + "" + product.price} customOnButtonClick={() => { this.props.nameProduct(menubreakfast) }} />
      )
    })
    return (
      <div id="secondboxitem">
       {menubreakfast}
      </div>

    );
  }
}
export default (breakfastmenu);
