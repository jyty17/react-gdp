import React from 'react';
import './Home.css';

import URL from '../env.js';
import Thumbnail from '../Thumbnail/Thumbnail.js';
import Header from '../Header/Header.js';
import Card from '../Card/Card.js';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      start_index: 0,
      end_index: 12,
      data: [],
      showModal: false,
      countryCode: ""
    }

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
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
      start_index: this.state.start_index + 12,
      end_index: this.state.end_index + 12
    })
  }

  index_backward(e) {
    this.setState({
      start_index: this.state.start_index - 12,
      end_index: this.state.end_index - 12
    })
  }

  closeModal() {
    this.setState({
      showModal: !this.state.showModal
    });
    // console.log(this.state.showModal);
  }

  openModal(countCode) {
    this.setState({
      showModal: !this.state.showModal,
      countryCode: countCode
    });
    // console.log(this.state.showModal, this.state.countryCode);
  }

	render() {
    const { 
      start_index, 
      end_index, 
      data, showModal, 
      countryCode 
    } = this.state;
    const dat = data.slice(start_index, end_index);
    // console.log(dat);
		return (
			<div>
        <Header />
        <div className="layout">
          <h1 className="intro">NatGDP shows national GDP (Gross Domestic Product) data from across the world from 1960 to 2018</h1>
        </div>
				<div 
          className="layout"
        >
        {
          dat.map( (x, index) =>
            <Thumbnail
              name={ x['countryname'] } 
              gdp={ x['gdp'] } 
              key={ index }
              toggle={ this.openModal }
              countCode={ x['code'] }
              >
              </Thumbnail>
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
        {
          showModal &&
            <Card
            toggle={this.closeModal}
            value={countryCode}
            />
        }
			</div>
    )
	}
}

export default Home;