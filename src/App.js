import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import CitiesList from "./components/citiesList";

import _ from "lodash";

import cities from './cities';
import SingleCity from "./components/singleCity";
import ErrorFindCity from "./components/errorFindCity";

class App extends Component {
    constructor(props){
        super(props);
	    let stateData = sessionStorage.getItem('state');
        if(stateData === null){
	        this.state  = {
		        cities: cities
	        };
        }else {
	        this.state  = {
		        cities: JSON.parse(stateData).cities
	        };
        }
        
        
        this.reloadCitiesData = setInterval(this.updateCitiesWeather, 5000);
    }
    
    componentWillUnmount = () => {
        clearInterval(this.reloadCitiesData);
        sessionStorage.removeItem('state');
    };
	
	componentDidUpdate = () => {
		sessionStorage.setItem('state', JSON.stringify(this.state));
    };
	
    updateCitiesWeather = () => {
        console.log("updateCitiesWeather");
	
        const {cities} = this.state;
	    const {REACT_APP_API_URL: url, REACT_APP_APPID: key, REACT_APP_UNITS: units} = process.env;
	
	    Promise.all(cities.map(city => this.fetchNewCitiesData(city, url, units, key)))
            .then(arrData => {
	            this.setState({
		            cities: arrData
	            })
            });
    };
    
    fetchNewCitiesData = async (city,url,units,key) => {
	    return await (await fetch(`${url}?units=${units}&APPID=${key}&q=${city.name}`)).json();
    };
    
	addNewCityToList = (city) => {
        this.setState({
          cities: [...this.state.cities, city]
        })
    };
    
    removeCityFromList = (id) => {
	    this.setState({
		    cities: _.filter(this.state.cities, (el) => el.id != id)
	    })
    };
	
	getCurrentCityById = (cityId) => {
	    return _.find(this.state.cities, (el) => el.id == cityId);
    };
    
    render() {
        const {cities} = this.state;
        return (
	        <Router>
                <div className="App">
                    <Header/>
                    <Route path="/" exact
                           render={() => (
	                           <CitiesList
		                           cities={cities}
		                           addNewCityToList={this.addNewCityToList}
		                           removeCityFromList={this.removeCityFromList}
                               />
                           )}
                    />
                    <Route path="/:cityId"
                           render={(props) => {
                               const {cityId} = props.match.params;
                               const foundCity = this.getCurrentCityById(cityId);
                               return (foundCity)?
                                   (
	                                   <SingleCity
		                                   foundCity={foundCity}
	                                   />
                                   )
                               :
                                   (
	                                   <ErrorFindCity cityId={cityId} />
                                   )
                           }}
                    />
                </div>
	        </Router>
        );
    }
}

export default App;
