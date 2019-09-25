import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './transactions/SignIn'
import Transactions from './transactions/Transactions'
import AuthCallBack from './transactions/AuthCallBack'
import GetPrices from './flights/GetPrices'
import Comparisons from './comparison/Comparison'

const Main = () => (
  <Router>
    <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/oauth/callback" component={AuthCallBack} />
        <Route path="/getprices" component={GetPrices} />
        <Route path="/comparison" component={Comparisons} />
    </Switch>
  </Router>
  );


export default Main;
