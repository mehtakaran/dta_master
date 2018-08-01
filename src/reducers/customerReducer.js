import * as types from '../actions/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_CUSTOMER:
    console.log("in reducer",action.customer);
    console.log("in reducer",state.length);
     let newId = state[state.length-1].id + 1;
      return [
          ...state,
           {
            "id": newId,
            "name": action.customer.name,
            "age": action.customer.age
          }
        ];
    default:
      return state;
  }
}
