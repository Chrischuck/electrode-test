import { connect } from "react-redux";


import React from "react";


export class Home extends React.Component {
  render() {
    console.log(this.props.default)
    return (
      <div>hello</div>
    );
  }
}

export default connect(state => state)(Home);