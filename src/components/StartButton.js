import React from "react";

class StartButton extends React.Component {
 
  clickedStartButton = (event) => {
  	event.preventDefault();
  	
  	this.props.startDrawing(true);

  };

  render() {
    return (
	    	<form onSubmit={this.clickedStartButton}>
	        	<button id="start-button" className="button" type="submit">{this.props.started ? "STARTED" : "START"}</button>
	    	</form>
	   );
 }
}

export default StartButton