import React from 'react';
import './Thumbnail.css';

import numeral from 'numeral';

class Thumbnail extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      hover: false
    };
	}

  handleClick() {
    const { countCode, toggle } = this.props;
    toggle(countCode);
  }

	render() {
  	return (
      <div
        className="thumb"
        onMouseEnter={ () => this.setState({ hover: true }) }
        onMouseLeave={ () => this.setState({ hover: false }) }
        onClick={ this.handleClick.bind(this) }
      >
      {
        <h1 className="thumb-name">{ this.state.hover ? 
          numeral(this.props.gdp).format('($0.00 a)')
          :
          this.props.name }</h1>
      }
      </div>
    );
	}
}

export default Thumbnail;