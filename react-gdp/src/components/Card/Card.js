import React from 'react';
import { 
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis
} from 'recharts';
import './Card.css'

import URL from '../env.js';


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
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
    const { value } = this.props;
    console.log("Card", this.props, this.state.data);
    const country = this.state.data['countryname']
    // const organizedData = this.state.data.reduce( 
    //   (acc, cur) => {

    //   }
    // );
    this.state.data.map(x => {
      console.log(x)
    })
    // console.log(organizedData);
		return (
      <div className="card-layout">
        <div className="card-modal">
          <div 
          className="card-close"
          onClick={this.props.toggle.bind(this)}
          >x</div>
          <h1>{ value }</h1>
          <LineChart width={600} height={400} data={this.state.data}>
            <Line type="monotone" dataKey="uv" stroke="#000000" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
          { //this.state.data.map(x => x) 
          }
          <p>Chart shows the gdp of { value } from 1960 - 2018</p>
        </div>
      </div>
		)
	}
}

export default Card;