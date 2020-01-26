import React, { lazy, Suspense, useEffect, useState }  from 'react';
import { Link, Route, Router, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/navbar';

import history from './history';

import logo from './logo.svg';
import './styles/main.css';

function App() {
  const [currentlyHome, setCurrentlyHome] = useState(false);

  const HomeView = lazy(() => import('./views/home'));
  const ChartsView = lazy(() => import('./views/charts'));
  const StrategiesView = lazy(() => import('./views/strategies'));

  const HomeViewWithMethod = () => {
    setCurrentlyHome(true);
    return (
      <>
        <HomeView setCurrentlyHome={setCurrentlyHome} />
      </>
    );
  };

  return (
    <>
    <Router history={history}>
      <Suspense fallback={<div>Loading... </div>}>
        <Navbar active="Home"/>
        <Switch>
          <Route exact path="/" component={HomeViewWithMethod} />
          <Route exact path="/charts" component={ChartsView} />
          <Route exact path="/strategies" component={StrategiesView} />
        </Switch>
      </Suspense>
    </Router>
    </>
  );
}

export default App;
