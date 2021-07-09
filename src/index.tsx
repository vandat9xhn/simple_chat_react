import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux';

import App from './App';
// import store from './redux/reducer';

ReactDOM.render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister()
