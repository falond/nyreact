import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
// import SavedArticles from "./components/SavedArticles";




const App = () =>
<Router>
  <div>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/articles" component={HomeContainer} />
      {/* <Route exact path="/articles/:id" component={SavedArticles} /> */}
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </div>
</Router>;

export default App;
