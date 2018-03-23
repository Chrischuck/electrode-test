import React from "react";
import { Route } from "react-router";
import Home from "./home";
import NotFound from './notFound'
import Other from './other'

export const routes = [

  <Route path="/" init='home' component={Home} />,
  <Route path='/signup' component={Other} />,

  <Route path='*' component={NotFound} />
];
