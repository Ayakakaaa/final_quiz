import React from "react";
import { Route, Redirect } from "react-router-dom";

export const AuthRoute = props => {

    const { isAuthenticated, component: Component, ...routeProps } = props;

    if (!isAuthenticated) {
    return <Redirect to="/session" />;
    } 
    else {
    return <Route {...routeProps} component={Component} />;
    }
};