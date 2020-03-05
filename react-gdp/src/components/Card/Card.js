import React from 'react';
// import CanvasJSReact from 'canvajs';
import './Card.css'

import URL from '../env.js';
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: []
    }
  }

  componentWillMount() {
    const countryCode = this.props.value
    var request = {
      body: {
        country_code: countryCode
      }
    }
    fetch(URL+'/country/'+countryCode)
      .then(res => res.json())
      .then(data => {
        this.setState({data: data})
      })
  }

	render() {
    const showCard = this.state.show;
    const { value } = this.props;
    console.log("Card", this.props, this.state.data);
		return (
      <div className="card-layout">
        <div className="card-modal">
          <div 
          className="card-close"
          onClick={this.props.toggle.bind(this)}
          >x</div>
          { value }
        </div>
      </div>
		)
	}
}

export default Card;