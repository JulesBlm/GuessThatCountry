import React, { Component } from 'react';
import IntroMessage from './IntroMessage';
import countriesList from "../countries";
// import statesprovinces from "../statesprovinces";
import { capitalize, shuffle, } from "../helpers.js";
import swal from 'sweetalert';

import '../css/selectcontinent.css';

function getShapes(selector, listFile, nrof) {	
	// Filter to continent
	let shapesList;
	if (selector !== "all") {
    	shapesList = listFile.filter(obj => {
	        return obj.continent === selector;
		})
	} else {
		shapesList = listFile;
	}
	
	// Shuffle
	shapesList = shuffle(shapesList)

	console.log({nrof});
	// Slice chosen amount of countries from shuffled continent list
	if (nrof !== "All") {
		return shapesList.slice(0, nrof);
	}
	return shapesList;
};

class SelectContinent extends Component {
	constructor(props) {
		super(props);
		this.handleContinent = this.handleContinent.bind(this);
	}

	state = {
		amount: null
	}

	handleAmount = event => {
		event.preventDefault();

		const chosenAmount = event.target.getAttribute('data-key');
		if (chosenAmount === "All") {
			this.setState({ amount: chosenAmount });
			return;
		}

		this.setState({ amount: parseFloat(chosenAmount) });
	}

	handleContinent = event => {
		event.preventDefault();

		if (this.state.amount === null ) {
			swal("Pick the amount first", "Before you can pick a continent you have to choose the amount countries first", "warning");
			return;
		}

		const amount = this.state.amount;
    	const chosenSelector = event.target.innerHTML.toLowerCase();
    	const myCountries = getShapes(chosenSelector, countriesList, amount);

    	this.props.changeCountries(myCountries);
	};

	render() {
		// let them select multiple?
		const continents = ["africa", "asia", "europe", "south america", "north america", "oceania" ,"all"];
		// const countries = ["USA"];
		const amounts = [5, 10, 20, 30, "All"]

		return (
			<div className="app">
				<IntroMessage />
				<h1>How Many?</h1>
				<div className="amount-container">
					{amounts.map(amount => 
					<button
						key={amount}
						data-key={amount}
						onClick={this.handleAmount}
						className="amount select"
					>
						{amount}
					</button>)
					}
				</div>
				<h1>Pick a continent</h1>
				<div className="continents-container">
					{continents.map(continent => 
					<button
						key={continent.replace(/ /g, '')}
						onClick={this.handleContinent}
						className="continent select"
					>
					{capitalize(continent)}
					</button>)
					}
				</div>
				{/*<h1>Or pick a country</h1>
				<div className="continents-container">
					{countries.map(country => 
					<button
						key={country.replace(/ /g, '')}
						onClick={this.handleCountry}
						className="continent select">{country}
					</button>)
					}
				</div>*/}
			</div>
		)
	}

}

export default SelectContinent;