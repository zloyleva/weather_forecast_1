import React, { Component } from 'react';
import ErrorFetchCity from "../errorFetchCity";
import _ from "lodash";

class AddCityForm extends Component {
	
	state = {
		showErrorFetchCity: false,
		message: null,
		searchText: ''
	};
	
	isExistCityInList = (city) => {
		return !!_.find(this.props.cities, {id: city.id})
	};
	
	typeTextInInput = (e) => {
		this.setState({
			showErrorFetchCity: false,
			searchText: e.target.value
		});
	};
	
	addNewCityHandler = (e) => {
		const eventTarget = e.target;
		e.preventDefault();
		const city = this.state.searchText;
		const {REACT_APP_API_URL: url, REACT_APP_APPID: key, REACT_APP_UNITS: units} = process.env;
		
		eventTarget.reset();
		eventTarget.firstChild.setAttribute("disabled", "disabled");
		
		fetch(`${url}?units=${units}&APPID=${key}&q=${city}`)
			.then(res => res.json())
			.then(res => {
				console.log(res);

				if(res.cod == 200){
					if(this.isExistCityInList(res)){
						this.setState({
							showErrorFetchCity: true,
							message: "This city is exit in list",
							code: "301"
						});
					}else {
						this.props.addNewCityToList(res);
					}
					
				}
				
				switch (res.cod) {
					case "200":
						this.props.addNewCityToList(res);
						break;
					case "404":
						this.setState({
							showErrorFetchCity: true,
							message: res.message,
							code: res.cod
						});
						break;
				}
				eventTarget.firstChild.removeAttribute("disabled");
			})
	};
	
	render() {
		return (
			<div className=" ">
				
				{(this.state.showErrorFetchCity?<ErrorFetchCity err={this.state}/>:"")}
				
				<div className="row">
					
					<form id="addCityForm" className="col" onSubmit={this.addNewCityHandler}>
						<fieldset>
							<div className="form-group row">
								<label htmlFor="inputCity" className="col-sm-2 col-form-label">Enter city:</label>
								<div className="col-sm-8">
									<input type="text" className="form-control" name="city"
									       placeholder="City" id="inputCity" required
									       onChange={this.typeTextInInput}
									/>
								</div>
								<div className="col-auto">
									<button type="submit" className="btn btn-primary mb-2">Add city</button>
								</div>
							</div>
						</fieldset>
					</form>
					
				</div>
				
			</div>
		);
	}
}

export default AddCityForm;