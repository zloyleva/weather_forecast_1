import React, { Component } from 'react';

import './style.css';
import {Link} from "react-router-dom";

class CityElement extends Component {
	
	removeCityHandler = () => {
		const {city} = this.props;
		this.props.removeCityFromList(city.id)
	};
	
	render() {
		const {city} = this.props;
		return (
			<div className="City__Element-box w-100 d-flex align-items-center">
				<span className="flex-fill">Name: {city.name}, Country: {city.sys.country}, Weather: {city.weather[0].main}</span>
				<Link className="btn" to={`/${city.id}`}>Show more</Link>
				<button type="button" className="close ml-2" onClick={this.removeCityHandler}>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		);
	}
}

export default CityElement;