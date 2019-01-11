import React, { Component } from 'react';

class SingleCity extends Component {
	
	render() {
		
		const {foundCity} = this.props;
		
		return (
			<div className="container my-5">
				<div className="row">
					<div className="col-12">
						<h1>Weather in {foundCity.name}, {foundCity.sys.country}</h1>
					</div>
					<div className="col-12">
						<p>Weather description: {foundCity.weather[0].description}</p>
						<p>Temperature: {foundCity.main.temp} °C</p>
					</div>
				</div>
			</div>
		);
	}
}

export default SingleCity;