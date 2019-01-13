import React, { Component } from 'react';
import './style.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class SingleCityWithMap extends Component {
	
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
					<div className="col-12" id="Google__Map__Container">
						<Map
							google={this.props.google}
							zoom={12}
							initialCenter={{
								lat: foundCity.coord.lat,
								lng: foundCity.coord.lon
							}}
						>
							
							<Marker onClick={this.onMarkerClick}
							        name={foundCity.name} />
						</Map>
					</div>
				</div>
			</div>
		);
	}
}

// export default SingleCity;

export default GoogleApiWrapper({
	apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(SingleCityWithMap)