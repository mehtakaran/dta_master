import {createStore} from 'redux';
import rootReducer from '../reducers';

function defaultStatus() {
    return {
      customers: [
        {
          "id":1,
          "name": "dd",
          "age":"21"
        },
        {
          "id": 2,
          "name":"aa",
           "age":"22"
        }
      ],

      filterCustomer: []
    }
}


export default function configureStore(initialState) {
    return createStore(rootReducer, initialState || defaultStatus());
}
