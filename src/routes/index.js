import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from '../components/Layout.js';
import Settings from '../components/Settings.js';
import History from '../components/History.js';
import Public from '../components/Public.js';
import About from '../components/About.js';
import OurPrinciples from '../components/OurPrinciples.js';

const AppRoutes =
        (
        <Router history={hashHistory} >
          <Route path='/' component={ Layout } >
            <IndexRoute component={ About } ></IndexRoute>
            <Route path="history" component={ History } ></Route>
            <Route path="public" component={ Public } ></Route>
            <Route path="principles" component={ OurPrinciples } ></Route>
            <Route path="about" component={ About } ></Route>
          </Route>
        </Router>
      );
export default AppRoutes;
