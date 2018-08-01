import React from 'react';
import {connect} from 'react-redux';
import * as Rx  from 'redux-rx';
import DisplayCustomers from './DisplayCustomers.js';
import * as customerActions from '../actions/customerActions';

class FindCustomer extends React.Component {


getCustomer(e,id){
  e.preventDefault();
  console.log("in find comp ", this.props);
  var data = [];
  data.push(id);
  data.push(this.props.customers);
  this.props.findCustomer(data);
  console.log("data ",this.props.filterCustomer);
  e.target.reset();
}

  render(){
    let id;
    return (
      <div>
         <h2>Find Customer</h2>
         <form onSubmit={e => this.getCustomer(e, id.value)}>
                            Customer ID:  <input type="text" ref={node => id = node}/>
                            <input type="submit"/>
           <DisplayCustomers myData = {this.props.filterCustomer}/>
        </form>
      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        // Associates the store to props
        customers: state.customers,
        filterCustomer: state.filterCustomer
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        // dispatches the action to reducer
        findCustomer: data => dispatch(customerActions.findCustomer(data)),
        aftFindCust: customer => dispatch(customerActions.aftFindCust(customer))
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(FindCustomer);
