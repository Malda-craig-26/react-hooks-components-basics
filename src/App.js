import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() {
  return (
    <div>
      <Article>
        <div id="About"></div>
        <h2>About</h2>
      </Article>
      <Navbar />
      <Home />
      <Comment />
    </div>
  );
}

export default App;
