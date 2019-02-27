import React from "react";
import { Route } from "react-router-dom";

import Login from '/login/login';
import Poll from '/poll/poll';
import Signup from '/login/signup';

const BaseRouter = () => (
  <div>
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/signup/" component={Signup} />{" "}
  </div>
);

export default BaseRouter;