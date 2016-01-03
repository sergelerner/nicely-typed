import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Reserved from './containers/reserved.container';
import configureStore from './store/configureStore'
import styles from './style/style.scss';

render(
  <Provider store={configureStore()}>
    <Reserved />
  </Provider>,
  document.getElementById('root')
)
