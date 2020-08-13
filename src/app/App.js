import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, NavLink,Switch} from "react-router-dom";
import Home from "./Home";
import Calculate from "../component/calculate/Calculate";
import Timer from "../component/clock/Timer"

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <nav className="header">
            <ul>
              <li><NavLink className="link" exact to="/timer" >在线倒计时器</NavLink></li>
              <li><NavLink className="link" exact to="/calculate">在线计算器</NavLink></li>
              <li><NavLink className="link" exact to="/">HOME</NavLink></li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/calculate" component={Calculate}></Route>
            <Route exact path="/timer" component={Timer}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
