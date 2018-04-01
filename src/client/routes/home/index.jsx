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
import twelve from '../../images/12.jpg'
import thirteen from '../../images/13.jpg'
import fourteen from '../../images/14.jpg'
import fifteen from '../../images/15.jpg'
import sixteen from '../../images/16.jpg'

import '../../styles/custom.css'
import '../../styles/normalize.css'
import '../../styles/raleway.css'
import '../../styles/skeleton.css'

export class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <div>
          <h1>This dog image is loaded from an API</h1>
          <img src={this.props.home.url} style={{height: '800px', height: '800px'}} />
        </div>

        <img src={one} style={{height: '500px', height: '500px'}} />
        <img src={two} style={{height: '500px', height: '500px'}} />
        <img src={three} style={{height: '500px', height: '500px'}} />
        <img src={four} style={{height: '500px', height: '500px'}} />
        <img src={five} style={{height: '500px', height: '500px'}} />
        <img src={six} style={{height: '500px', height: '500px'}} />
        <img src={seven} style={{height: '500px', height: '500px'}} />
        <img src={eight} style={{height: '500px', height: '500px'}} />
        <img src={nine} style={{height: '500px', height: '500px'}} />
        <img src={ten} style={{height: '500px', height: '500px'}} />
        <img src={eleven} style={{height: '500px', height: '500px'}} />
        <img src={twelve} style={{height: '500px', height: '500px'}} />
        <img src={thirteen} style={{height: '500px', height: '500px'}} />
        <img src={fourteen} style={{height: '500px', height: '500px'}} />
        <img src={fifteen} style={{height: '500px', height: '500px'}} />
        <img src={sixteen} style={{height: '500px', height: '500px'}} />
      </div>
    );
  }
}

export default connect(state => state)(Home);