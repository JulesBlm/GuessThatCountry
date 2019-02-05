import React from 'react';
import { capitalize } from "../helpers.js";
import { Spring } from 'react-spring'
//Fix next hint mechanism

class DisplayMessage extends React.Component {
  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
  }

  display = (kind, country, previous) => {

    const correctMessages = ["That's correct!", "Good one!", "Nice", "Steady!", "Going good", "Right on", "A+", "Yup", "Smooth sailing!"];
    const incorrectMessages = ["Wrong!", "Try again", "That ain't right man", "Nope", "Not even close", "Nuh-uh"]

    switch (kind) {
      case "first":
        return "Go!";
      case "correct":
        return correctMessages[Math.floor(Math.random() * correctMessages.length)];
      case "incorrect":
        return incorrectMessages[Math.floor(Math.random() * incorrectMessages.length)];
      case "skipped":
        return `Skipped ${capitalize(previous.name)}!`;
      case "hint": {
        return country.hints[0];
      }
      case "last":
        return "That was the last one!";
      default:
        return "Click on start and guess which country is being drawn as fast as possible. Super correct spelling is not needed. Skipping a country incurs a penalty!";
    }
  }

  render() {
    return (
      <Spring  from={{ opacity: 0 }} to={{ opacity: 0.8 }}>
          {styles => <div className="message" style={styles}>
                <h2>{this.display(this.props.message, this.props.country, this.props.prevcountry)}</h2>
            </div>}
      </Spring>
    )
  }
};

export default DisplayMessage