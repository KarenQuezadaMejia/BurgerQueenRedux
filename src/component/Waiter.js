import React, {Component} from 'react';
import './css/Waiter.css';
import Button from './Button';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import {connect} from 'react-redux';

class Waiter extends Component{
    constructor(props){
        super(props);
            this.state ={
                showBreakfast: false,
                showLunch: false,
            }

            this.BreakfastFunc= this.BreakfastFunc.bind(this);
            this.LunchFunc= this.LunchFunc.bind(this);    
        }

    

    BreakfastFunc(){
        this.setState({
            ...this.state,
            showBreakfast: true,
            showLunch: false,
        })
    }

    LunchFunc(){
        this.setState({
            ...this.state,
            showBreakfast: false,
            showLunch: true,
        })
    }

    render(){

        return (
            <div>
            <div id="boxitem">
            <Button rol = "Desayuno" customOnButtonClick ={this.BreakfastFunc} id="desayuno"/>
            <Button rol="Almuerzo" customOnButtonClick={this.LunchFunc} id="almuerzo"/>
            </div>
            <div id="contentitems">
            {
                this.state.showBreakfast &&
                <Breakfast></Breakfast>
            }
            {
                this.state.showLunch &&
                <Lunch></Lunch>
            }
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      ...state
    };
  }
  export default connect(
    mapStateToProps
  )(Waiter);