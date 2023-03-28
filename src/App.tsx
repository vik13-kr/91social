/** @format */

import React from "react";
import "./App.css";
import moment from "moment";
import TopBarComp from "./components/TopBar/TopBarComp";
import CalenderComp from "./components/CalenderView/CalenderComp";

function App() {
	const date = moment();
	const daysInMonth = moment().daysInMonth();

	function geneateDates(noOfDays: number) {
		const date = moment().format("YYYY-MM-DD");
		for (let i = 1; i <= noOfDays; i++) {
			const weekDay = moment(`2023-03-${i}`).weekday();
			console.log(`${i}----${weekDay}`);
		}
	}
	// geneateDates(daysInMonth);
	console.log(date.format("YYYY-MM-DD"));
	return (
		<div className="App">
			{/* <header className="App-header">Hello</header> */}
			<TopBarComp />
			<CalenderComp />
		</div>
	);
}

export default App;
