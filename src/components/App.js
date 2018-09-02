/*
1. Refactor drawing Generate SVG's on the fly with from world TopoJSON and give option to view neighbours
   ! Fix redrawing country on hint on on wrong
   ! DETECT MOBILE AND ADJUST WIDTH svg's
   1. Make up score mechanism
   - Make an explanation demo
   - Make splash screen
   - hardmode turn of scaling
   - Shake entryfrom when wrong (more animations!)
   ? Add second hint mechanism (region)
   ? Add scalebar
   ? Connect to firebase/backend show stats of avg recognition per country etc.
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
        this.setState({ time: now });
        this.setState({ started: bool });
        this.setState({ message: "first" });
    }

    changeMessage = (kind) => {
        this.setState({ message : kind});
    }

    nextCountry = (result) => {
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

        this.setState({ index : this.state.index + 1});
    }

    render() {
        const prevcountry = this.state.countries[this.state.index - 1];
        const currentcountry = this.state.countries[this.state.index];

        return (
            <div className="app">
                <div className="toprow">
                    <button id="back-button" onClick={this.back} className="button button-right">Back</button>
                </div>
                <div className="drawbox">
                    {(this.state.started && !this.state.ended) && <AnimateCountry country={currentcountry} />}
                    {(!this.state.started) && <StartButton startDrawing={this.startDrawing} started={this.state.started} />}
                    {(this.state.ended) && <ShowScore results={this.state.results} />}
                </div>
                <DisplayMessage
                        prevcountry={prevcountry}
                        country={currentcountry}
                        message={this.state.message}
                />
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