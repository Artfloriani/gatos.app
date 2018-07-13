import * as React from 'react';
import { Provider } from 'react-redux'
import App from './containers/App';
import configureStore from './store/configureStore';
​
const store = configureStore({})
​
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