import React from 'react';
import { capitalize } from "../helpers.js";

const ContinentPanel = props => <button type="submit" className="continent">{capitalize(props.continent)}</button>

export default ContinentPanel;