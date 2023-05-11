// flow rate and pump time entries for a grow bed (water pump page)
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { ControlValuesContext } from '../Hooks/ControlValuesContext';

const NumericalControl = ({ label, document, field }) => {
	const { getValueAndStatus, dispatchLocalValueChange } = useContext(ControlValuesContext);
	const { v, s } = getValueAndStatus(document, field);

	return (
		<TextField
			label={label}
			fullWidth
			type="number"
			inputProps={{ step: 10 }}
			value={v ?? 0}
			onChange={e => dispatchLocalValueChange({ document, field, newValue: Number(e.target.value) })}
			color={s ? "edited" : undefined}
			focused={s ? true : undefined}
		/>
	);
}

export default NumericalControl;