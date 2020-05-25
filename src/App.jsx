import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Temperature from "./components/Temperature";
import CustomizeImage from "./components/CustomizeImage";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/temperature' component={Temperature}></Route>
        <Route exact path='/customize-image' component={CustomizeImage}></Route>
      </Switch>
    </div>
  );
}

export default App;
