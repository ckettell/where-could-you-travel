import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import SignIn from './transactions/SignIn'
import Transactions from './transactions/Transactions'


const Main = () => (
  <Router>
    <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/transations" component={Transactions} />
    </Switch>
  </Router>
  );


export default Main;
