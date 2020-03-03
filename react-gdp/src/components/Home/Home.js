import React from 'react';
import './Home.css';

import URL from '../env.js';
import Thumbnail from '../Thumbnail/Thumbnail.js';
import Header from '../Header/Header.js';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      raw_data: {},
      start_index: 0,
      end_index: 10,
      data: []
    }
  }
  componentDidMount() {
    fetch(URL+'/countries')
      .then(res => res.json())
      .then(data => {
        this.setState({data: data})
      })
  }

  index_forward(e) {
    this.setState({ 
      start_index: this.state.start_index + 10,
      end_index: this.state.end_index + 10
    })
  }

  index_backward(e) {
    this.setState({
      start_index: this.state.start_index - 10,
      end_index: this.state.end_index - 10
    })
  }

	render() {
    // const countries = this.state.data
    // Object.keys(countries).map((type) => {
    //   console.log(countries[type])
    // })
    // const count = Object.keys(countries).map((k) => {
    //   return <Thumbnail name={countries[k]['countryname']} gdp={countries[k]['gdp']}></Thumbnail>
    // });
    const { start_index, end_index, data } = this.state;
    const dat = data.slice(start_index, end_index);
    console.log(dat, start_index, end_index);
    // const page = dat.map(x => console.log(x))
		return (
			<div>
        <Header />
        <div className="layout">
          <h1 className="intro">NatGDP shows national GDP (Gross Domestic Product) data from across the world from 1960 to 2018</h1>
        </div>
				<div className="layout">
        {
          dat.map(x =>
            <Thumbnail name={x['countryname']} gdp={x['gdp']}></Thumbnail>
          )
        }
				</div>
        <div className="pageButton">
        {
          start_index > 0 && 
            <button onClick={this.index_backward.bind(this)}>last</button>
        }
        {
          end_index < data.length && 
            <button onClick={this.index_forward.bind(this)}>next</button>
        }
          
        </div>
			</div>
    )
	}
}

export default Home;