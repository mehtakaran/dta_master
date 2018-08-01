import React from 'react';
import './index.css';
import App from './components/App.js';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import configureStore from './store/configureStore.js';

const store = configureStore();

render(
    (<Provider store={store}>
      <HashRouter>
          <App name="Darshna"/>
      </HashRouter>
    </Provider>),
    document.getElementById('root')
);

registerServiceWorker();
