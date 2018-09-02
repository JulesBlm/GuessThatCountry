import React, { Component } from 'react';
import { capitalize } from "../helpers.js";
import PropTypes from 'prop-types';

import '../css/results.css';

class ShowScore extends Component {
	static PropTypes = {
		results: PropTypes.arrayOf(PropTypes.object),
	}
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
		
		return (
			<div className="score">
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

								{capitalize(i.name)} : 
							<div>
								{capitalize(i.result)} in {(i.time/1000).toFixed(2)} seconds
							</div>
							</div>
						)
					})}
					<h1>Score</h1>
					<p>
					Correct: {totalCorrect}
					</p>
					<p>
					Skipped: {this.props.results.length - totalCorrect}
					</p>
					<p>Total time: {(totalTime/1000).toFixed(2)} seconds</p>
				</div>
			</div>
		)
	}

}

export default ShowScore;