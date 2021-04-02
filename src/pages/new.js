import * as React from "react";
import { Link } from "gatsby";
import ReactMde from "react-mde";
import * as showdown from "showdown";
import { Base64 } from "js-base64";

import "react-mde/lib/styles/css/react-mde-all.css";

const LZUTF8 = require("lzutf8");

export default class NewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tab: "write",
    };
    this.converter = new showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true,
    });
    this.encoded = "";
    this.encode = (input) => {
      this.encoded = Base64.fromUint8Array(LZUTF8.compress(input), true);
    };
  }

  handleValueChange = (value) => {
    this.setState({ value });
    this.encode(value);
  };

  handleTabChange = (tab) => {
    this.setState({ tab });
  };

  render() {
    return (
      <div className="container">
        <title>🍙 notepono</title>
        <Link to="/">home</Link>
        <br></br>
        <hr></hr>
        <ReactMde
          onChange={this.handleValueChange}
          onTabChange={this.handleTabChange}
          value={this.state.value}
          generateMarkdownPreview={(markdown) =>
            Promise.resolve(this.converter.makeHtml(markdown))
          }
          selectedTab={this.state.tab}
        />
        <Link to={"/p/" + this.encoded}>Link to your page</Link>
      </div>
    );
  }
}
