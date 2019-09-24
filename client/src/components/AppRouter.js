import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './transactions/SignIn'
import Transactions from './transactions/Transactions'
import AuthCallBack from './transactions/AuthCallBack'
import GetPrices from './flights/GetPrices'


const Main = () => (
  <Router>
    <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/oauth/callback" component={AuthCallBack} />
        <Route path="/getprices" component={GetPrices} />
    </Switch>
  </Router>
  );


export default Main;
