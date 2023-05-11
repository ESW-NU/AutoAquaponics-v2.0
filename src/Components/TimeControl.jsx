// start time picker component and duration dropdown/entries for lights page

import { useContext } from "react";
import dayjs from "dayjs";
import { TimeField } from '@mui/x-date-pickers';
import { getValueAndStatus, ControlValuesContext } from '../Hooks/ControlValuesContext';

const TimeControl = ({ label, document, enabled = true }) => {
    const { ctrlVals, dispatchCtrlVals } = useContext(ControlValuesContext);
	const { v: starthhV, s: starthhS } = getValueAndStatus(ctrlVals, document, "starthh");
	const { v: startmmV, s: startmmS } = getValueAndStatus(ctrlVals, document, "startmm");
	const { v: startmeridiemV, startmeridiemS } = getValueAndStatus(ctrlVals, document, "meridiem");

	const startDate = dayjs().hour(starthhV + (startmeridiemV === "PM" ? 12 : 0)).minute(startmmV);
	const setStartDate = (date) => {
		dispatchCtrlVals({ type: "set_local", document, field: "starthh", newValue: date.hour() % 12 });
		dispatchCtrlVals({ type: "set_local", document, field: "startmm", newValue: date.minute() });
		dispatchCtrlVals({ type: "set_local", document, field: "meridiem", newValue: date.hour() >= 12 ? "PM" : "AM"});
	};

	const edited = starthhS || startmmS || startmeridiemS;

	return (
		<TimeField
			label={label}
			focused={edited ? true : undefined}
			color={edited ? "edited" : undefined}
			value={startDate}
			onChange={setStartDate}
			disabled={!enabled}
		/>
	);
};

export default TimeControl;