import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import logo from './assets/logo.svg';
import { Image, Title } from './components';
import store from './store/store';

import * as styles from './styles';

const App = () => (
  <Provider store={store}>
    <div className={styles.App}>
      <Image src={logo} alt="React logo"/>
      <Title>Hello Parcel x React</Title>
    </div>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

if (module.hot !== undefined) {
  module.hot.accept();
}
