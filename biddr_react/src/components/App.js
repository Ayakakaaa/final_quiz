import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NavBar } from "./NavBar";
import { WelcomePage } from "./pages/WelcomePage";
import { AuthRoute } from "./AuthRoute";
import { SignInPage } from "./pages/SignInPage";
import { Session } from "../api/session";
import { User } from "../api/user";
import { AuctionIndexPage } from "./pages/AuctionIndexPage";
import { AuctionNewPage } from "./pages/AuctionNewPage";
import AuctionShowPage from "./pages/AuctionShowPage";





const App = () => {
  const [currentUser, setCurrentUser] = useState(null);


  const getUser = useCallback(() => {
    User.current().then(data => {
      if (typeof data.id !== "number") {
        setCurrentUser(null);
      } else {
        setCurrentUser(data);
      }
    });
  }, []);

  const destroySession = () => {
    Session.destroy().then(setCurrentUser(null));
  };

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <BrowserRouter>
      <header>
        <NavBar
          currentUser={currentUser}
          onSignOut={destroySession}
        />
      </header>

      <div className="title">
        <Switch>
          <Route exact path="/" component={WelcomePage} /> 

          <Route exact path="/auctions"  currentUser={currentUser} component={AuctionIndexPage} />
          
          <AuthRoute
            // The !! turns a statement from "truthy/falsy" to "true/false" respectively
            isAuthenticated={!!currentUser}
            component={AuctionNewPage}
            path="/auctions/new"
            exact
          />
          <AuthRoute
            isAuthenticated={!!currentUser}
            component={AuctionShowPage}
            path="/auctions/:id"
            exact
          />

          <Route
            path="/sign_in"
            render={routeProps => (
              <SignInPage {...routeProps} onSignIn={getUser} />
            )}
          />

        </Switch>
      </div>


    </BrowserRouter>

      )

}

export default App;
