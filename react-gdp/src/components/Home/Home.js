import React from 'react';
import './Home.css';

import URL from '../env.js';
import Thumbnail from '../Thumbnail/Thumbnail.js';
import Header from '../Header/Header.js';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      data: {}
    }
  }
  componentDidMount() {
    fetch(URL+'/countries')
      .then(res => res.json())
      .then(data => {
        this.setState({data: data})
      })
  }

	render() {
    // console.log(typeof(this.state.data));
    const countries = this.state.data;
    Object.keys(countries).map((type) => {
      console.log(countries[type])
    })
    const count = Object.keys(countries).map((k) => {
      return <Thumbnail name={countries[k]['Country Name']} gdp={countries[k]['gdp']}></Thumbnail>
    });
		return (
			<div>
        <Header />
        <div className="layout">
          <h1 className="intro">*This App* shows national GDP (Gross Domestic Product) data from across the world from 1960 to 2018</h1>
        </div>
				<div className="layout">
        {
          count
        }
        {
					// <Thumbnail name="1" gdp="$"></Thumbnail>
					// <Thumbnail name="2" gdp="$$"></Thumbnail>
					// <Thumbnail name="3" gdp="$$$"></Thumbnail>
					// <Thumbnail name="4" gdp="$$$$"></Thumbnail>
     //      <Thumbnail name="5" gdp="$$$$$"></Thumbnail>
     //      <Thumbnail name="6" gdp="$$$$$$"></Thumbnail>
        }
				</div>
			</div>
    )
	}
}

export default Home;