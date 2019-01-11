import React, { Component } from 'react';

class ErrorFindCity extends Component {
	
	render() {
		
		const {cityId} = this.props;

		return (
			<div className="container my-5">
				<div className="row">
					<div className="col">
						Can't find city with ID: {cityId}
					</div>
				</div>
			</div>
		);
	}
}

export default ErrorFindCity;