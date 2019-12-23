import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CrossTabTest2 from './crossTabTest2';

const routes = [
    {
      path: "/crossTabTest2",
      component: CrossTabTest2
    }
  ];

  export default function RouteConfigExample() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/crossTabTest2">crossTabTest2</Link>
            </li>
          </ul>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }