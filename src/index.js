import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import WebFontLoader from 'webfontloader';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

WebFontLoader.load({
  google: {
    families: [
      'Oswald:300;400;500;600:latin-ext',
    ],
  },
});

if (module.hot) {
  module.hot.accept();
}
