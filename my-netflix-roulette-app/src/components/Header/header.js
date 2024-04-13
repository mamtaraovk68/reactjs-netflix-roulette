import React, { Component } from "react";
import Counter from "../Counter/counter";
import SearchForm from "../SearchForm/searchform";
import "./header.css";
import Logo from "../Logo/logo";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="div-container">
        <Logo />
        <Counter />
        <SearchForm />
      </div>
    );
  }
}

export default Header;