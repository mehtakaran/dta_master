import * as types from './ActionTypes';

export const addCustomer = (customer) => {
    // Return action
    return {
        // Unique identifier
        type: types.ADD_CUSTOMER,
        customer : customer
    }
};

export const findCustomer = (data = []) => {
    // Return action
    return {
        // Unique identifier
        type: types.FIND_CUSTOMER,
        custId: data[0],
        customers: data[1]
    }
};

export const  aftFindCust = (name) => {
    // Return action
    return {
        // Unique identifier
        type: types.AFTER_FIND_CUSTOMER,
        name:name
    }
};
