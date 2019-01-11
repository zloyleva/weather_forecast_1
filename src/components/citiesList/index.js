import React, { Component } from 'react';
import CityElement from "../cityElement";

import './style.css';
import AddCityForm from "../addCityForm";

class CitiesList extends Component {
	createHtmlList = (cities) => {
		return cities.map(el => (
			<li className="media my-4 py-2 px-2" key={el.id}>
				<CityElement
					city={el}
					removeCityFromList={this.props.removeCityFromList}
				/>
			</li>
		))
	};
	
	render() {
		const {cities} = this.props;
		
		return (
			<div className="container mt-5">
				<AddCityForm
					addNewCityToList={this.props.addNewCityToList}
					cities={cities}
				/>
				{(cities && cities.length === 0)?
					<div className="row">
						<div className="col">
							<h3>No cities in list yet</h3>
						</div>
					</div>
				:
					<div className="row">
						<ul className="col list-unstyled">
							{this.createHtmlList(cities)}
						</ul>
					</div>
				}
			</div>
		);
	}
}

export default CitiesList;