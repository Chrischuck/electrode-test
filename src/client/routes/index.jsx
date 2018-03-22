import React from "react";
import { Route } from "react-router";
import Home from "./home";
import NotFound from './notFound'

export const routes = [
  <Route path="/" component={Home} />,
  <Route path='*' component={NotFound} />
];
