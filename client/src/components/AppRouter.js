import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './transactions/SignIn'
import Transactions from './transactions/Transactions'
import AuthCallBack from './transactions/AuthCallBack'


const Main = () => (
  <Router>
    <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/transations" component={Transactions} />
        <Route path="/auth/callback" component={AuthCallBack} />
    </Switch>
  </Router>
  );


export default Main;
