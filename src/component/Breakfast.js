import React, { Component } from 'react';
import Button from './Button';
import './css/Breakfast.css'

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
        <Button rol={product.item + "" + product.price} customOnButtonClick={() => { this.props.nameProduct(menubreakfast) }} id="optionBreak" />
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
