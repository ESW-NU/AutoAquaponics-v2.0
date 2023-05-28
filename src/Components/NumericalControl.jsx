// flow rate and pump time entries for a grow bed (water pump page)
import { TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { getValueAndStatus, ControlValuesContext } from '../Hooks/ControlValuesContext';

const NumericalControl = ({ label, document, field, enabled = true, step = 1, verify = () => true }) => {
	/* isEmptyString is a special state intended specifically to capture when the user deleted all
	the characters in the field. When this happens, this component displays as if its value was the
	empty string, but functionally it acts as if it has its last non-empty
	value. When thw text field is blurred, the isEmptyString must become false; if the field was
	empty at the time of blurring, it will simply regain the value it had right before blurring. */
	const [isEmpty, setIsEmpty] = useState(false);

	const { ctrlVals, dispatchCtrlVals } = useContext(ControlValuesContext);
	const { v, s } = getValueAndStatus(ctrlVals, document, field);

	const handleChange = (e) => {
		const newString = e.target.value;
		const isEmptyNow = newString === "";
		setIsEmpty(isEmptyNow);
		if (!isEmptyNow) {
			const newValue = Number(newString);
			if (verify(newValue)) {
				dispatchCtrlVals({ type: "set_local", document, field, newValue });
			}
		}
	};
	const handleBlur = () => {
		setIsEmpty(false);
	};

	return (
		<TextField
			label={label}
			fullWidth
			type="number"
			inputProps={{ step }}
			disabled={!enabled}
			value={isEmpty ? "" : (v ?? "")}
			onChange={handleChange}
			onBlur={handleBlur}
			color={s ? "edited" : undefined}
			focused={s ? true : undefined}
		/>
	);
}

export default NumericalControl;