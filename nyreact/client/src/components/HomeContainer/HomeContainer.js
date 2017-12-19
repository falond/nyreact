import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import { List, ListItem } from "../List";
import SavedArticles from "../SavedArticles";
import API from "../../utils/API";

class HomeContainer extends Component {
  // Setting the component's initial state
  state = {
    topic: "",
    startYear: "",
    endYear: ""
  };

// When this component mounts, search for the articles
componentDidMount() {
   this.searchArticles();
}

searchArticles = query => {
  API.search(query)
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
};

handleInputChange = event => {
  const value = event.target.value;
  const name = event.target.name;
  this.setState({
    [name]: value
  });
};

// When the form is submitted, search the NYT API for the values
handleFormSubmit = event => {
  event.preventDefault();
  this.searchArticles(this.state.searchTerm, this.state.limit, this.state.startYear, this.state.endYear);
};


render() {
return(
  <div>
    <Search />
    <List/> 
    <SavedArticles />
  </div>
  
);
}
}

export default HomeContainer;