import React from 'react';
import PropTypes from 'prop-types';
import { interpolateString } from 'd3-interpolate';
import { xml } from 'd3-fetch';
import { select } from 'd3-selection';
import { transition } from 'd3-transition';
import { scaleLinear } from 'd3-scale';
import { capitalize } from "../helpers.js";
// import * as topojson from "topojson-client";

//SCALE DRAWN COUNTRY TO VIEWWIDTH FOR MOBILE;

class AnimateCountry extends React.Component {

   constructor(props){
      super(props)
      this.drawArea = React.createRef();
      this.drawCountry = this.drawCountry.bind(this)
   }

   componentDidMount() {
      this.drawCountry()
   }

   componentDidUpdate() {
      this.drawCountry()
   }

   drawCountry() {
      // remove previous svg if present.
      select("svg").remove();

      /*
      const countryTopoJSON = world.filter(this.props.country.name)

      // const boundingBox = topojson.bbox(countryTopoJSON)

      if (this.props.hint) {
            const neighbours = topojson.neighbors(world)

            ?const boundingBox = topojson.bbox(world)
      }

      const countryGeoJSON = topojson.feature(countryTopoJSON).

      svg
        .attr("width", scaleHor(this.props.country.horizontal) )
        .attr("height", scaleVert(this.props.country.vertical) );

      svg.selectAll("path")
        .data(countryGeoJSON)
        .enter().append("path")
          .attr("d", d3.geoPath())

      */
      const filename = `svg/${this.props.country.name}.svg`; // move to prop

      // Copy 'this' so it can be reached inside the xml function
      const thisCountry = this;

      var scaleHor = scaleLinear()
        .domain([50, 5000])
        .range([50, 1200]);
        
      var scaleVert = scaleLinear()
        .domain([100, 4271])
        .range([50, 500]);
        
      // console.group(this.props.country.name)
      //  console.log(`Horizontal: ${this.props.country.horizontal } km`)
      //  console.log(`Vertical: ${this.props.country.vertical } km`)
      //  console.log(`BBArea: ${this.props.country.bbArea } km`)
      // console.groupEnd();

      const hor = this.props.country.horizontal;
      const vert = this.props.country.vertical;

      const newWidth = scaleHor(hor);   
      const newHeight = scaleVert(vert);   

      // if (vert > hor) {
      //       console.warn("!!long!");
      //       console.log(`New height: ${newHeight} px`);
      //  } else {
      //       console.warn("!!wide!");
      //       console.log(`New width: ${newWidth} px`);
      // }

      xml(filename).then(function(data) {
            const importedNode = document.importNode(data.documentElement, true);

            select(thisCountry.drawArea).node()
                  .appendChild(importedNode);

            const svg = select("svg");
            // Set all stroke widths to 5 px, regardless of scaling
            // const gChild = svg.selectAll("g");
            // gChild.selectAll("path").attr("stroke-width", 5); //style('stroke-width', 5)
            // gChild.selectAll("path").attr("vector-effect", "non-scaling-stroke")

            if (vert > hor) {
                  svg.attr("height", newHeight);
            } else {
                  svg.attr("width", newWidth);
            }

            const paths = svg.selectAll("path")
            .call(trans);

            function trans(path) {
            path.transition()
                  .duration(9000)
                  .attrTween("stroke-dasharray", tweenDash)
            }

            function tweenDash() {
            const length = this.getTotalLength(),
                  i = interpolateString("0," + length, length + "," + length); // interpolation of stroke-dasharray attr

            return function(t) { return i(t); };
            }
      })
      
   }


   render() {
      return (
         <div id="animatebox" ref={(node) => { this.drawArea = node; }}>
         </div>
      )
   }
}

AnimateCountry.propTypes = {
      country: PropTypes.object.isRequired
}

export default AnimateCountry
//<p>NOW IT SHOULD DRAW {capitalize(this.props.country.name)}</p>