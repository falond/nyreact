import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div class="container">
    <div class="panel panel-default">
    <div class="panel-heading">Results</div>
    <div class="panel-body">
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
    </div>
    </div>
    </div>
   

  );
};


