import * as types from '../actions/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.FIND_CUSTOMER:
        console.log("in find reducer",action.custId);
        console.log("in find reducer",action.customers);
        //var customer  = findCustomer(action.custId, action.customers);
        let customers = action.customers;
        let response ;
        console.log("res2 ", response);
        response = customers.filter(function(cust){
                 return cust.id == action.custId});

        console.log("Response  ",response);
        return response;
     case types.AFTER_FIND_CUSTOMER:
          console.log("in after find!!");
          return state = [];
    default:
      return state;
  }
}

/** var customer = findCustomer(custId, customers){
  return customers.filter(function(cust){
    if(cust.id === custId){
        let res = [];
        res.push(cust);
        console.log("response",res);
      return res;
    }
  });
} */
