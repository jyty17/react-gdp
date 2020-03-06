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
    const { data } = this.state;
    // console.log("Card", this.props, this.state.data);
    var countryname = "";
    if (data.length) {
      // console.log(this.state.data[0].countryname);
      countryname = data.countryname;
    }
    // this.state.data.map( (x, i) => {
    //   console.log(x, i)
    // })
		return (
      <div className="card-layout">
        { data.length > 0 && 
          <div className="card-modal">
            <div 
            className="card-close"
            onClick={this.props.toggle.bind(this)}
            >x</div>
            <h1>{ countryname }</h1>
            <LineChart width={600} height={400} data={this.state.data}>
              <Line type="monotone" dataKey="uv" stroke="#000000" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
            { //this.state.data.map(x => x) 
            }
            <p>Chart shows the gdp of { countryname } from 1960 - 2018</p>
          </div>
      }
      </div>
		)
	}
}

export default Card;