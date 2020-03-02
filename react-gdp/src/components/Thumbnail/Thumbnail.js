import React from 'react'
import './Thumbnail.css'

class Thumbnail extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      name: this.props.name,
      gdp: this.props.gdp,
      displayed_text: ''
    };
	}

  componentWillMount() {
    this.setState({ displayed_text: this.state.name })
  }

	render() {
  	return (
      <div
        className="thumb"
        onMouseEnter={() => this.setState({displayed_text: this.state.gdp})}
        onMouseLeave={() => this.setState({displayed_text: this.state.name})}
      >
      {
        // <h1 className="thumb-name">{this.state.name}</h1>
        // <h1 className="thumb-gdp">{this.state.text}</h1>
        <h1 className="thumb-name">{this.state.displayed_text}</h1>
      }
      </div>
    );
	}
}

export default Thumbnail;