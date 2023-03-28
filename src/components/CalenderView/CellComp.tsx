/** @format */

import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import moment from "moment";
import ScheduleComp from "../DialogBox/ScheduleComp";
interface Props {
	day: number | string;
}

interface Appoitment {
	date: "string";
	timeSlot: "string";
}

function CellComp({ day }: Props) {
	const cellRef = useRef<HTMLTableCellElement | null>(null);
	const currentMonth = useSelector<RootState, string>(
		(state: any) => state.currentMonth,
	);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const addNewSchedule = () => {
		// console.log("adding,.....", cellRef.current?.innerText);
		// day = cellRef.current?.innerText;
		const date = moment(`${currentMonth}-${day}`).format("YYYY-MM-DD");
		console.log("date....", date);
		setIsOpen(true);
	};
	console.log("cell----", day, isOpen);
	return (
		<>
			<td onClick={addNewSchedule} ref={cellRef}>
				{day}
			</td>
			<ScheduleComp isOpen={isOpen} setIsOpen={setIsOpen} day={day} />
		</>
	);
}

export default CellComp;
