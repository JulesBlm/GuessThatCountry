import React, { Component } from 'react';
import { ratio } from '/Users/julesblom/Dropbox/Side/Unfinished/animatecountryreact/node_modules/fuzzball/fuzzball.js'
import { Spring } from 'react-spring'

// Make a general button element?

class EnterForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitCountry = this.handleSubmitCountry.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleHint = this.handleHint.bind(this);
    this.enteredCountry = React.createRef();
  }

  state = {
    clickedHint: false
  }

  handleSkip(event) {
    this.props.changeMessage("skipped");
    this.props.nextCountry("skipped");
    // Flip clickedHint back to false because we're going to the next country
    this.setState({clickedHint: false});
  };

  handleHint = (event) => {
      event.preventDefault();
      // Update message in parent state
      this.props.changeMessage("hint");
      this.setState({clickedHint: true}, function () {
        console.log(this.state.clickedHint);
      });
  }; 

  handleSubmitCountry(event) {
  	event.preventDefault();

  	const submittedCountry =  this.enteredCountry.current.value.toLowerCase(); 
  	const correctCountry = this.props.country;
    const fuzzRatio = ratio(correctCountry.name, submittedCountry);

    if (fuzzRatio > 82 || (correctCountry.synonyms).includes(submittedCountry)) {
      this.props.nextCountry("correct");
      this.props.changeMessage("correct");
      this.setState({clickedHint: false});
    } else {
      this.props.changeMessage("incorrect");      
    }

  	event.currentTarget.reset();
  };

  render() {
  	return (
    <Spring force from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {styles => <div style={styles}>
  	  <form autoComplete="off" onSubmit={this.handleSubmitCountry}>
  	    <input
          type="text"
          ref={this.enteredCountry}
          required
          placeholder="country"
          className="text-input"
        />
        <button
          className="button button-left"
          type="submit"
          disabled={!this.props.started}>
          Enter
        </button>
        <button
          className="button button-middle"
          type="submit" onClick={this.handleHint}
          disabled={!this.props.started || this.state.clickedHint}>Hint</button>
       {/* <button
          className="button"
          disabled={!this.props.started}>
            Neighbors
        </button>*/}
        <button
          className="button button-right"
          type="button" onClick={this.handleSkip}
          disabled={!this.props.started}>
          Skip
        </button>
  	  </form>
    </div>}
    </Spring>
    );
  }
}

export default EnterForm


// WEBPACK FOOTER //
// ./src/components/EnterForm.js