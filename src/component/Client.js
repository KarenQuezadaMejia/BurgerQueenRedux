import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firstName} from '../action/client'


class Diner extends Component {
    constructor(props) {
        super(props);
        this.handleName = this.handleName.bind(this);
      }
    handleName = (e) => {
        e.preventDefault();
        this.props.turnName(this.getTitle.value)
    }
      
  render() {
     
  return (
    <div>
       <form onSubmit={this.handleName}>
          <div className="form-group">
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              ref={(input) => this.getTitle = input}
              //value={this.props.formValues.firstName}
            />
          </div>
          <button type = "submit">Enviar </button>
        </form>

    </div>
  );
 }
}
const mapStateToProps = (state)=>{
    return {
      ...state
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
      turnName: firstName(dispatch),
      
    }
  }

  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Diner);