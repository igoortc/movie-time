import { Miss, render } from 'hops';
import React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import globalStyles from './assets/styles.css';
import Header from './components/header';
import Home from './components/home';
import Movie from './components/movie';

const store = configureStore();

const App = () => (
  <div className={globalStyles.app}>
    <Helmet>
      <title>movieTime 🎞</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
      <meta name="theme-color" content="#1d1e1f" />
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
