import logo from "./logo.svg";
import { Chart } from "react-google-charts";
import { useState } from "react";

import "./App.css";

function App() {
	const [pollData, setpollData] = useState({
		amountSOAP: 0,
		amountREST: 0,
		amountRPC: 0,
		amountPollsubmissions: 0,
	});

	function fetchPollData() {
		fetch("http://localhost:8000/pollSub").then((response) =>
			response.json().then((data) => {
				setpollData(data);
			})
		);
	}
	return (
		<div className="container">
      <h1>On the Origin of the Web</h1>
      <h2>REST APIs</h2>
			<Chart
				width={"500px"}
				height={"300px"}
				chartType="BarChart"
				loader={<div>Loading Chart</div>}
				data={[
					["", "poeple using it"],
					["REST", pollData.amountREST],
					["SOAP", pollData.amountSOAP],
					["RPC", pollData.amountRPC],
				]}
				options={{
					title: "Which kind of API did you use",
					chartArea: { width: "50%" },
					hAxis: {
						title: "Total usage",
						minValue: 0,
					},
					vAxis: {
						title: "APIs",
					},
				}}
				// For tests
				rootProps={{ "data-testid": "1" }}
			/>
			<button onClick={(e) => fetchPollData()}>fetch</button>
		</div>
	);
}

export default App;
