import React from 'react'
import "./Search.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const Search = props =>
<div class="container">
<div class="panel panel-default">
<div class="panel-heading">Search</div>
<div class="panel-body">
  <form className="search">
    <div className="form-group">
      <label htmlFor="topic">Topic</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="article"
        list="articles"
        type="text"
        className="form-control"
        placeholder="Type a topic"
        id="article"
      />
      <label htmlFor="startyear">Start Year</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="article"
        list="articles"
        type="text"
        className="form-control"
        placeholder="Type a start year"
        id="article"
      />
      <label htmlFor="endyear">End Year</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="article"
        list="articles"
        type="text"
        className="form-control"
        placeholder="Type a end year"
        id="article"
      />
       <br />
       <button onClick={props.handleFormSubmit} className="btn btn-primary">
         Search
       </button>
    </div>
  </form>
  </div>
  </div>
  </div>

export default Search;
