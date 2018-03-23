import { connect } from "react-redux";
import { Link } from "react-router";

import React from "react";


export class Other extends React.Component {
  render() {
    console.log(this.props.default)
    return (
      [
        <div>hellasdfo</div>,
        <a href='/'>asdf</a>
      ]
    );
  }
}

export default connect(state => state)(Other);