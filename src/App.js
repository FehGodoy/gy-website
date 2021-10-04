import React from "react";
import Home from "./Template/Home";
import GlobalStyles from "./styles/GlobalStyles";
import SignIn from "./Template/Signin";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




function App() {

  return (
    <>
    <Router>      
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />        
      </Switch>      
    </Router>
    <GlobalStyles />
    </>
  );
}

export default App;
 