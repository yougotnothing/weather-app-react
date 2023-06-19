import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./screens/components/home";
import NotFound from "./screens/components/notFound";
import Cities from "./screens/components/cities";

export function RouterApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
