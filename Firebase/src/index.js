import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import reducers from "./reducers";
import { createStore } from "redux";
import App from "./App";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Show from "./components/Show";
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
    <Router>
      <div>
          <Route path="/" exact component={App}/>
          <Route path="/create"  component={Create}/>
          <Route path="/edit/:id"  component={Edit}/>
          <Route path="/show/:id"  component={Show}/>
        
      </div>
    </Router>
    </Provider>,
    document.getElementById("root")
)