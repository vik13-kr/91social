/** @format */

import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { changeCurrentMonth } from "../../reducers/changeMonthSlice";

function TopBarComp() {
	const dispatch = useDispatch();

	const [monthString, setMonthString] = useState<string>(
		moment().format("MMMM-YYYY"),
	);

	const monthChange = (type: string) => {
		let newMonth = "";
		if (type === "+") {
			newMonth = moment(monthString).add(1, "month").format("MMMM-YYYY");
		}
		if (type === "-") {
			newMonth = moment(monthString).subtract(1, "month").format("MMMM-YYYY");
		}
		setMonthString(newMonth);
	};

	useEffect(() => {
		dispatch(changeCurrentMonth(monthString));
	}, []);

	useEffect(() => {
		dispatch(changeCurrentMonth(monthString));
	}, [monthString]);

	return (
		<div>
			<button onClick={() => monthChange("-")}>-</button>

			{monthString}

			<button onClick={() => monthChange("+")}>+</button>
		</div>
	);
}

export default TopBarComp;
