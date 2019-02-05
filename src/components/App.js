/*
1. Refactor drawing Generate SVG's on the fly with from world TopoJSON and give option to view neighbours
2. Calculate bounding boxes & extents on the fly!
   ! DETECT MOBILE AND ADJUST WIDTH svg's
   1. Make up score mechanism
   - Make an explanation demo
   - Make splash screen
   - hardmode turn of scaling
   - More animations: Shake entryfrom when wrong
   ? Add second hint mechanism (region)
   ? Add scalebar
   ? Connect to firebase/backend show stats of avg recognition per country etc.
        -save score etc show best 
*/
import React, { Component } from 'react';
import EnterForm from './EnterForm';
import StartButton from './StartButton';
import AnimateCountry from './AnimateCountry';
import DisplayMessage from './DisplayMessage';
import ShowScore from './ShowScore'

class App extends Component {
    constructor(props) {
        super(props);
        this.back = this.back.bind(this);
    }

    state = {
        countries: this.props.countries,
        index: 0,
        started: false,
        ended: false,
        results: [],
        message: "",
        time: new Date()
    };

    back = () => {
        // Empty countries list
        this.props.changeCountries([]);
    }

    startDrawing = (bool) =>  {
        const now = Date.now();
        this.setState({ time: now, started: bool, message: "first" });
    }

    changeMessage = (kind) => {
        this.setState({ message : kind});
    }

    nextCountry = (result) => {
        console.log("Next country!")
        const prevTime = this.state.time;
        const timeDifference = Date.now() - prevTime;
        const now = Date.now();

        this.setState({ time: now });

        const results = [...this.state.results];
        const wollo = {
            "name": this.state.countries[this.state.index].name,
            "result": result,
            "time": timeDifference
        }
        results.push(wollo);
        this.setState({ results });

        // Move to next country unless it was the last one
        if ( this.state.index === (this.state.countries.length-1) ) {
            this.changeMessage("last")
            this.setState({ ended : true });
            return
        }
   
        // Copy state to increment index by one
        const prevState = this.state;
        this.setState((prevState) => ({
            index: prevState.index + 1
        }));        
 
    }

    render() {

        const currentindex = this.state.index;
        const currentcountry = this.state.countries[currentindex];
        const prevcountry =this.state.countries[currentindex - 1];

        return (
            <div className="app">
                <button onClick={this.back} className="button button-right" id="back-button">Back</button>
                <div className="drawbox">
                    {(this.state.started && !this.state.ended) &&
                    <React.Fragment>
                        <AnimateCountry country={currentcountry} />
                        <DisplayMessage
                            prevcountry={prevcountry}
                            country={currentcountry}
                            message={this.state.message}
                        />
                    </React.Fragment>
                    }
                    {(!this.state.started) &&
                    <React.Fragment>
                        <StartButton
                            startDrawing={this.startDrawing} 
                            started={this.state.started}
                        />
                        <DisplayMessage
                            prevcountry={prevcountry}
                            country={currentcountry}
                            message={this.state.message}
                        />
                    </React.Fragment>
                    }
                    {(this.state.ended) && <ShowScore results={this.state.results} />}
                </div>
 
                {(!this.state.ended) && <EnterForm
                    changeScore={this.changeScore}
                    changeMessage={this.changeMessage}
                    nextCountry={this.nextCountry}
                    country={currentcountry}
                    started={this.state.started}
                    ended={this.state.ended}
                />}

            </div>
        );
    }
}

export default App;