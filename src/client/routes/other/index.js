import { connect } from "react-redux";
import { Link } from "react-router";

import React from "react";


export class Other extends React.Component {
  render() {
    console.log(this.props.location.action)

    return (
      [
        <div>hellasdfo</div>,
        <Link to='/' >asdf</Link>
      ]
    );
  }
}

export default connect(state => state)(Other);