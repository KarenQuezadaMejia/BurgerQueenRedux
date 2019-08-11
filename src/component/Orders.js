import React, { Component } from 'react';
import {connect} from 'react-redux';

class Pedido extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
  }

handleClick(product){
  this.props.deleteItem(product);
  console.log(product)
}

  render() {
  return (
    
    <div>
       <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Producto</th>
      <th>Precio</th>
      <th>-</th>
    </tr>
  </thead>
  <tbody>
  {this.props.product.product.map(product=>
    <tr>
      <td key={product.id}>#</td>
      <td>{product.name}</td>
      <td>{product.valor}</td>
      <td><Button variant="outline-warning" onClick={()=>this.handleClick(product)}><Octicon name="trashcan"/></Button></td>
   
    </tr>
    )}
  </tbody>
  <thead>
    <tr>
      <th>#</th>
      <th>Total</th>
        <th>{this.props.product.product.reduce((add,product)=> add + product.valor,0)}</th>
        <th>-</th>
    </tr>
  </thead>
</Table>
    </div>
  );
 }
}
const mapStateToProps = (state)=>{
  return {
    ...state
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: deleteToOrder(dispatch),
  }
}

export default connect(
mapStateToProps,mapDispatchToProps
)(Pedido);