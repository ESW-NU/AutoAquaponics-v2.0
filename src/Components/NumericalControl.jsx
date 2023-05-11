// flow rate and pump time entries for a grow bed (water pump page)
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { ControlValuesContext } from '../Hooks/ControlValuesContext';

const NumericalControl = ({ label, document, field, enabled = true, step = 1, verify = () => true }) => {
	const { getValueAndStatus, dispatchLocalValueChange } = useContext(ControlValuesContext);
	const { v, s } = getValueAndStatus(document, field);

	const handleChange = (e) => {
		const newValue = Number(e.target.value);
		if (verify(newValue)) {
			dispatchLocalValueChange({ type: "set_value", document, field, newValue });
		}
	};

	return (
		<TextField
			label={label}
			fullWidth
			type="number"
			inputProps={{ step }}
			disabled={!enabled}
			value={v ?? ""}
			onChange={handleChange}
			color={s ? "edited" : undefined}
			focused={s ? true : undefined}
		/>
	);
}

export default NumericalControl;