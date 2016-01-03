import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.reducer';
import Reserved from './containers/reserved.container';
import styles from './style/style.scss';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Reserved />
  </Provider>,
  document.getElementById('root')
)
