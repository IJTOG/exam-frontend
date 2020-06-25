import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import appRoutes from "./routes/app";
import logo from "./assets/images/logo.png";

const App = () => {
  return (
    <div className="App">
      <img id="logo" alt="logo" src={logo} />
      <div className="container">
        <BrowserRouter>
          <Switch>
            {appRoutes.map((prop, key) => {
              return (
                <Route
                  path={prop.path}
                  component={prop.component}
                  key={key}
                  exact
                />
              );
            })}
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
