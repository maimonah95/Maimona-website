import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'jquery'
import 'popper.js'
import 'bootstrap'

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>loading ~~~</div>}>
      <App />
    </Suspense>
  </BrowserRouter>,

  document.getElementById("root")
);

serviceWorker.unregister();
