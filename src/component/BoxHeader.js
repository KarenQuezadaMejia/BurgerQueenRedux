import React, {Component} from 'react'
import './css/BoxHeader.css';
import BoxHeaderLogo from '../logo.png';
import Button from './Button';
import Waiter from './Waiter';
import Kitchen from './Kitchen';
import {connect} from 'react-redux';
import Client from './Client';

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
      <article id="boxoption">
    <div className= "BoxHeader">
      <img src={BoxHeaderLogo} className = "BoxHeaderLogo" alt="logo"/>
      
    </div>
    <Client/>
    <div id = "dinerName"> 
      {this.props.client.client}
      </div>
      <div id="options">
      
    <Button rol = "Meser@" customOnButtonClick ={this.WaiterFunc}/>
    <Button rol = "Cocina"customOnButtonClick ={this.KitchenFunc}/>
    </div>

    <div id="contMenu">
      {
        this.state.showWaiter && 
        <Waiter></Waiter>
      }
      {
        this.state.showKitchen &&
        <Kitchen></Kitchen>
      }
    </div>
    </article>
    
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    ...state
  };
}

export default connect(
  mapStateToProps
)(BoxHeader);