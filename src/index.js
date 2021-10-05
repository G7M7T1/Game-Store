import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./page/App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./page/NotFound";
// import Login from "./page/Login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
