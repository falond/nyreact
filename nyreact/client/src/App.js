import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SavedArticles from "./components/SavedArticles";


const App = () =>
<Router>
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/articles" component={HomeContainer} />
      <Route exact path="/articles/:id" component={SavedArticles} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
    <Footer />

  </div>
</Router>;

export default App;
