import React from "react";
import ReactDOM from "react-dom";
import { PieChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
import "./plex-and-carbon-components.css";

class App extends React.Component {
	state = {
		data: [
	{
		"group": "2V2N 9KYPM version 1",
		"value": 20000
	},
	{
		"group": "L22I P66EP L22I P66EP L22I P66EP",
		"value": 65000
	},
	{
		"group": "JQAI 2M4L1",
		"value": 75000
	},
	{
		"group": "J9DZ F37AP",
		"value": 1200
	},
	{
		"group": "YEL48 Q6XK YEL48",
		"value": 10000
	},
	{
		"group": "Misc",
		"value": 25000
	}
],
		options: {
	"title": "Pie",
	"resizable": true,
	"height": "400px"
}
	};

	render = () => (
		<PieChart
			data={this.state.data}
			options={this.state.options}>
		</PieChart>
	);
}
ReactDOM.render(<App />, document.getElementById("root"));
  