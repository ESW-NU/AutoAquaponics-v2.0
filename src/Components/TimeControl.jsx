// start time picker component and duration dropdown/entries for lights page

import { useContext } from "react";
import dayjs from "dayjs";
import { TimeField } from '@mui/x-date-pickers';
import { ControlValuesContext } from '../Hooks/ControlValuesContext';

const TimeControl = ({ label, document, disabled = false }) => {
	const { getValueAndStatus, dispatchLocalValueChange } = useContext(ControlValuesContext);
	const { v: starthhV, s: starthhS } = getValueAndStatus(document, "starthh");
	const { v: startmmV, s: startmmS } = getValueAndStatus(document, "startmm");
	const { v: startmeridiemV, startmeridiemS } = getValueAndStatus(document, "meridiem");

	const startDate = dayjs().hour(starthhV + (startmeridiemV === "PM" ? 12 : 0)).minute(startmmV);
	const setStartDate = (date) => {
		dispatchLocalValueChange({ document, field: "starthh", newValue: date.hour() % 12 });
		dispatchLocalValueChange({ document, field: "startmm", newValue: date.minute() });
		dispatchLocalValueChange({ document, field: "meridiem", newValue: date.hour() >= 12 ? "PM" : "AM"});
	};

	const edited = starthhS || startmmS || startmeridiemS;

	return (
		<TimeField
			label={label}
			focused={edited ? true : undefined}
			color={edited ? "edited" : undefined}
			value={startDate}
			onChange={setStartDate}
			disabled={disabled}
		/>
	);
};

export default TimeControl;