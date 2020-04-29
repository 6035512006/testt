import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import store from "./store";
import "./App.css";




import Nav from './Nav'
import Modal from './Modal'





class App extends Component {

  state = {
    cartOpen: false
  }

  
  handleCart = () => this.setState({ cartOpen: true })
  handleClose = () => this.setState({ cartOpen: false })

  render() {
    return (
      <Provider store={store}>


        <div>
        <Nav handleCart={this.handleCart}/>
        <div>
          {(this.state.cartOpen) && ( <Modal state={this.state} handleClose={this.handleClose} />)}
        </div>
      </div>


        <div className="container">
          <h4>Select product to the cart</h4>
          <hr />
              <Products />
          </div>
      </Provider>
    );
  }
}

export default App;
