import React from 'react'
import './Thumbnail.css'

class Thumbnail extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      hover: false
    };
	}

	render() {
  	return (
      <div
        className="thumb"
        onMouseEnter={ () => this.setState({ hover: true }) }
        onMouseLeave={ () => this.setState({ hover: false }) }
      >
      {
        <h1 className="thumb-name">{ this.state.hover ? this.props.gdp : this.props.name }</h1>
      }
      </div>
    );
	}
}

export default Thumbnail;