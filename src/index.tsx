import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { GitUsersList } from './components/Home/gitUsersList';
import Header from './components/Layout/header';
import { UserDetails } from './components/userDetails';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/" render={() => <GitUsersList />}/>
        <Route exact={true} path="/user-details/:username" render={() => <UserDetails />}/>
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

if (module.hot !== undefined) {
  module.hot.accept();
}
