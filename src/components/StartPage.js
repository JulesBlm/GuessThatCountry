import React, { Component } from 'react';
import App from "./App";
import SelectContinent from "./SelectContinent";

class StartPage extends Component {
	state = {
		countries: [],
	}

    changeCountries = (countries) => {
        this.setState({ countries });
    }

	render() {
		return ((this.state.countries).length === 0) ?
		<SelectContinent changeCountries={this.changeCountries} />
	  : <App countries={this.state.countries} changeCountries={this.changeCountries}/>
	}

}

export default StartPage;