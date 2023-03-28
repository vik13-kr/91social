/** @format */
import moment from "moment";
import { DateObj } from "../models";

export function geneateDates(currentMonth: string) {
	const noOfDays = moment(currentMonth).daysInMonth();
	const dateArr: DateObj[] = [];
	for (let i = 1; i <= noOfDays; i++) {
		const weekDay = moment(
			`${moment(currentMonth).format("YYYY-MM")}-${i}`,
		).weekday();
		dateArr.push({
			date: i,
			day: weekDay,
		});
	}

	return dateArr;
}
