import * as React from 'react';
import * as ReactDOM from 'react-dom';
import unregister from './registerServiceWorker';

import Root from './Root';

import 'normalize.css';
import './index.css';




ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
unregister()
