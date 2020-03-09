import React from 'react';
import { 
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
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
    var restructDat = [];
    if (data.length > 0) {
      countryname = data[0].countryname;
      restructDat = Object.keys(data[0]).slice(0, 58).reduce( (acc, cur) => {
        acc.push({
          year: cur,
          gdp: data[0][cur]
        });
        return acc;
      }, [])
      console.log(restructDat);

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
            <ResponsiveContainer width="80%" height="50%" >
              <LineChart data={restructDat}>
                <Line 
                  type="monotone" 
                  dataKey="gdp" 
                  stroke="#000000" 
                  margin={{
                    top: 0,
                    right: 20,
                    bottom: 0,
                    left: 20
                  }}/>
                <CartesianGrid stroke="#ccc" />
                <Tooltip />
                <XAxis dataKey="year" />
              </LineChart>
            </ResponsiveContainer>
            <p>Chart shows the gdp of { countryname } from 1960 - 2018</p>
          </div>
      }
      </div>
		)
	}
}

export default Card;