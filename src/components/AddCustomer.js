import React from 'react';
import {connect} from 'react-redux'
import DisplayCustomers from './DisplayCustomers.js';
import * as customerActions from '../actions/customerActions';

class AddCustomer extends React.Component {

  render(){
       let name;
       let age;
      const headerMsg = "No. of customers :";
      console.log("home ", this.props);
    return (
      <div>
         <h3>{headerMsg} {this.props.customers.length} </h3>
         <form onSubmit={e => {
                              e.preventDefault();
                              var input = {name: name.value, age: age.value};
                              this.props.addCustomer(input);
                              e.target.reset();
                          }}>
                            Name:  <input type="text" name="vName" ref={node => name = node}/>
                            Age:  <input type="text" name="vAge" ref={node => age = node}/>

                            <input type="submit"/>
            </form>

           <DisplayCustomers myData = {this.props.customers}/>
      </div>
    );
  }
}


// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        // You can now say
        customers: state.customers,
        filterCustomer: state.filterCustomer
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        addCustomer: customer => dispatch(customerActions.addCustomer(customer))
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);
