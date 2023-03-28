/** @format */

import React, { useRef } from "react";

interface Props {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	day: string | number;
}

function ScheduleComp({ isOpen, setIsOpen, day }: Props) {
	console.log("open....", isOpen);
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const handleClose = () => {
		console.log("here", !isOpen);

		setIsOpen(!isOpen);
		// dialogRef.current?.close();
	};
	return (
		<dialog open={isOpen} ref={dialogRef}>
			{day}
			<span onClick={handleClose}>Close</span>
		</dialog>
	);
}

export default ScheduleComp;
