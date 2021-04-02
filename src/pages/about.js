import React from "react";
import { Link } from "gatsby";
// markup
const AboutPage = () => {
  return (
    <div>
      <main>
        <title>🍙 notepono</title>
        <h1>about</h1>
        <hr></hr>
        <p>
          notepono is entirely client-side text storage. In fact, it's all in
          the url. Try it out <Link to="/new">here</Link>. No data is stored
          about you, and it is completely anonymous and secure.
        </p>
        <hr></hr>
        <Link to="/">back</Link>
      </main>
    </div>
  );
};

export default AboutPage;
