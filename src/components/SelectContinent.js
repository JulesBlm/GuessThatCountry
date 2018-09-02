import React, { Component } from 'react';
import countriesList from "../countries";
import statesprovinces from "../statesprovinces";
import { capitalize, shuffle } from "../helpers.js";

import '../css/selectcontinent.css';

function getShapes(selector, listFile) {
    if (selector === "all") return listFile;

    const shapesList = listFile.filter(obj => {
        return obj.continent === selector;
    })
    return shapesList;
};

class SelectContinent extends Component {
	constructor(props) {
		super(props);
		this.handleContinent = this.handleContinent.bind(this);
	}

	// almost the same functions, this is ugly
	handleContinent = event => {
		event.preventDefault();

    	const chosenSelector = event.target.innerHTML.toLowerCase();
    	const myCountries = shuffle(getShapes(chosenSelector, countriesList));

    	this.props.changeCountries(myCountries);
	};


	handleCountry = event => {
		event.preventDefault();
		
    	const chosenSelector = event.target.innerHTML.toLowerCase();
    	const myProvinces = shuffle(getShapes(chosenSelector, statesprovinces));

    	this.props.changeCountries(myProvinces);
	};

	render() {
		// let them select multiple?
		const continents = ["africa", "asia", "europe", "south america", "north america", "oceania" ,"all"];
		const countries = ["USA"];

		return (
			<div className="app">
				<h1>Pick a continent</h1>
				<div className="continents-container">
					{continents.map(continent => <button key={continent.replace(/ /g, '')} onClick={this.handleContinent} className="continent">{capitalize(continent)}</button>)}
				</div>
				<h1>Or pick a country</h1>
				<div className="continents-container">
					{countries.map(country => <button key={country.replace(/ /g, '')} onClick={this.handleCountry} className="continent">{country}</button>)}
				</div>				
			</div>
		)
	}

}

export default SelectContinent;