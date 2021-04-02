import React from "react";
import { Base64 } from "js-base64";
import { Link } from "gatsby";
import * as showdown from "showdown";

const LZUTF8 = require("lzutf8");

// markup
const PostPage = ({ params }) => {
  function decode(input) {
    const decoded = LZUTF8.decompress(Base64.toUint8Array(input));
    var converter = new showdown.Converter(),
      html = converter.makeHtml(decoded);
    return { __html: html };
  }
  return (
    <div>
      <main>
        <title>🍙 notepono</title>
        <Link to="/">home</Link>
        <hr></hr>
        <div dangerouslySetInnerHTML={decode(params.page)}></div>
      </main>
      <div id="footer">This is footer</div>
    </div>
  );
};

export default PostPage;
