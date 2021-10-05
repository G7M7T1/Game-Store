import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./page/App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./page/NotFound";
import Login from "./page/Login";
import Register from "./page/Register";
import Terms from "./page/Terms";
import Status from "./page/Status";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/register" exact>
          <Register />
        </Route>

        <Route path="/terms" exact>
          <Terms />
        </Route>

        <Route path="/status" exact>
          <Status />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
