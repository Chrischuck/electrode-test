import { connect } from "react-redux";
import React from "react";

import one from '../../images/1.jpg'
import two from '../../images/2.jpg'
import three from '../../images/3.jpg'
import four from '../../images/4.jpg'
import five from '../../images/5.jpg'
import six from '../../images/6.jpg'
import seven from '../../images/7.jpg'
import eight from '../../images/8.jpg'
import nine from '../../images/9.jpg'
import ten from '../../images/10.jpg'
import eleven from '../../images/11.jpg'


export class Home extends React.Component {
  render() {
    console.log(this.props.default)
    return (
      <div>
        <img src={one} />
        <img src={two} />
        <img src={three} />
        <img src={four} />
        <img src={five} />
        <img src={six} />
        <img src={seven} />
        <img src={eight} />
        <img src={nine} />
        <img src={ten} />
        <img src={eleven} />
      </div>
    );
  }
}

export default connect(state => state)(Home);