import React, { Component } from 'react';
import { capitalize } from "../helpers.js";
import PropTypes from 'prop-types';

import '../css/results.css';

// index score to length of countries d3 scale?

class ShowScore extends Component {
	render() {
		const totalCorrect = this.props.results.reduce((accumulator, currentValue) => {
			if (currentValue.result === "correct") {
				return accumulator + 1;
			} else {
				return accumulator;
			}
		}, 0)

		const totalTime = this.props.results.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.time;
		}, 0)

		const totalSkipped = this.props.results.length - totalCorrect;

		const totalScore = totalCorrect ? (((totalTime/1000) + (3*totalSkipped))/totalCorrect) * this.props.results.length : 0;
		
		return (
			<div className="score">
				<h1>Score</h1>
					{(totalCorrect - totalSkipped === totalCorrect) ?
						(<React.Fragment><p className="hundred">💯%</p> <p> You got all of them right, well done!</p></React.Fragment>)
					  : (<React.Fragment><p>Correct: {totalCorrect}</p> <p>Skipped: {totalSkipped}</p></React.Fragment>)}
					<p>Total time: {(totalTime/1000).toFixed(2)} seconds</p>
					<p>Total score: {totalScore.toFixed(2)} </p>

				<h1>Results</h1>
				<div className="results-container">
					{this.props.results.map(i => {
						return (
							<div className={`result ${i.result}`} key={i.name}>
								
								<object 
									className="littleCountry"
									width="40px"
									height="40px"
									data={`svg/${i.name}.svg`}
									type="image/svg+xml">
								</object>

								{capitalize(i.name)} : {capitalize(i.result)} in {(i.time/1000).toFixed(2)} seconds
							</div>
						)
					})}
				</div>
			</div>
		)
	}

}

export default ShowScore;