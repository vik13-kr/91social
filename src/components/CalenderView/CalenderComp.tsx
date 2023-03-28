/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { geneateDates } from "../../utils/generateDates";
import { DateObj } from "../../models";
import CellComp from "./CellComp";

function CalenderComp() {
	const currentMonth = useSelector<RootState, string>(
		(state: any) => state.currentMonth,
	);

	const [datesArr, setDatesArr] = useState<DateObj[] | []>([]);

	useEffect(() => {
		let dates = geneateDates(currentMonth);
		setDatesArr(dates);
	}, [currentMonth]);

	const getCell = (day: number | string) => {
		return <CellComp day={day} />;
	};

	const createRows = (daysArr: DateObj[]) => {
		let counter = 0;
		let currentDatePointer = daysArr[0]?.date;
		let endDate = daysArr[daysArr.length - 1]?.date;

		const tBody = [];
		let rows = [];

		if (daysArr[counter]?.day !== 0) {
			for (let i = 0; i < daysArr[counter]?.day; i++) {
				rows.push(getCell(""));
			}
		}
		while (currentDatePointer <= endDate) {
			for (let i = daysArr[counter]?.day; i < 7; i++) {
				if (daysArr[counter]?.day !== i) {
					rows.push(getCell(""));
				} else {
					rows.push(getCell(currentDatePointer));
				}
				counter += 1;

				currentDatePointer = daysArr[counter]?.date;
			}

			tBody.push(rows);
			rows = [];
		}

		return tBody.map((rows, idx) => (
			<tr key={idx}>{rows.map((col) => col)}</tr>
		));
	};

	return (
		<div>
			<table>
				<thead>
					<th>SUN</th>
					<th>MON</th>
					<th>TUE</th>
					<th>WED</th>
					<th>THU</th>
					<th>FRI</th>
					<th>SAT</th>
				</thead>
				<tbody>{createRows(datesArr)}</tbody>
			</table>
		</div>
	);
}

export default CalenderComp;
