import React, {Component} from 'react'
import './BoxHeader.css';
import BoxHeaderLogo from '../logo.png';
import Button from './Button';
import Waiter from './Waiter';
import Kitchen from './Kitchen';

class BoxHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      showKitchen: false,
      showWaiter: false,
    }

    this.WaiterFunc = this.WaiterFunc.bind(this);
    this.KitchenFunc = this.KitchenFunc.bind(this);
  }
  WaiterFunc (){
    this.setState({
      ...this.state,
      showWaiter : true,
      showKitchen : false
    })
  }
  KitchenFunc (){
    this.setState({
      ...this.state,
      showWaiter : false,
      showKitchen : true
    })
  }
  
  render () {
    return (
      <div>
    <div className= "BoxHeader">
      <img src={BoxHeaderLogo} className = "BoxHeaderLogo" alt="logo"/>
      
    </div>
    <div id="options">
    <Button rol = "Meser@" customOnButtonClick ={this.WaiterFunc}/>
      <Button rol = "Cocina"customOnButtonClick ={this.KitchenFunc}/>
    </div>
    <div id="containerMenu">
    
      {
        this.state.showWaiter && 
        <Waiter></Waiter>
      }
      {
        this.state.showKitchen &&
        <Kitchen></Kitchen>
      }
    </div>
    </div>
    
    );
  }
}

export default (BoxHeader);