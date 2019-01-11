import React, { Component } from 'react';

class ErrorFetchCity extends Component {
	render() {
		const {message, code} = this.props.err;
		
		return (
			<div className="row">
				<div className="col">
					<div className="alert alert-danger w-100" role="alert">
						Code: {code}. Error: {message}
					</div>
				</div>
			</div>
		);
	}
}

export default ErrorFetchCity;