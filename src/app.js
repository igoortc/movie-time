import { Miss, render } from 'hops';
import React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import globalStyles from './assets/styles.css';
import Header from './components/header';
import Home from './containers/home';
import Movie from './containers/movie';

const store = configureStore();

const App = () => (
  <div className={globalStyles.app}>
    <Helmet>
      <title>movieTime</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
      <meta name="theme-color" content="#1d1e1f" />
      <link
        rel="icon"
        href="https://s3.amazonaws.com/ionic-marketplace/watch-movie-ui-kit/icon.png"
        sizes="16x16"
        type="image/png"
      />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movie/:id" component={Movie} />
      <Miss />
    </Switch>
  </div>
);

export default render(
  <Provider store={store}>
    <App />
  </Provider>
);
