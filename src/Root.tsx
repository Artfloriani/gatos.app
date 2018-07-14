import * as React from 'react';
import { Provider } from 'react-redux'
import { FILTER_BUTTONS } from './constants';
import App from './containers/App';
import configureStore from './store/configureStore';
​
const initialState = {
    currentPage: 0,
    filter: FILTER_BUTTONS[0].searchQuery,
    gifs: [],
    isFetching: false,
  };

const store = configureStore(initialState);

export default class Root extends React.Component {
  // tslint:disable-next-line:member-access
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}