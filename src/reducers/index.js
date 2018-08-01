import { combineReducers } from 'redux';
import customerReducer from './customerReducer'
import filterCustReducer from './filterCustReducer'

export default combineReducers({
    customers: customerReducer,
    filterCustomer: filterCustReducer
    // More reducers if there are
    // can go here
});
