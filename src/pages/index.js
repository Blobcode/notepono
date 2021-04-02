import React from "react";
import { Link } from "gatsby";
// markup
const IndexPage = () => {
  return (
    <div className="wrapper">
      <main>
        <title>🍙 notepono</title>
        <h1>🍙 notepono</h1>
        <Link to="/new">make an article</Link> / <Link to="/about">about</Link>
        <hr></hr>
        <p>
          <code>notepono is a fast and easy way to share text in a link.</code>
          <br></br>
        </p>
      </main>
    </div>
  );
};

export default IndexPage;
