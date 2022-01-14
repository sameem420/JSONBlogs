import React from "react";
import PostList from "./components/PostList";
import blogging from "./assets/images/blogging.svg";
const App = () => {
  return (
    <div className="ui grid container">
      <img className="ui centered large image" src={blogging} alt="Blogging" />
      <div className="ui horizontal segments">
        <PostList />
      </div>
    </div>
  );
};

export default App;
