// flow rate and pump time entries for a grow bed (water pump page)
import { Box, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import { ControlValuesContext } from '../Hooks/ControlValuesContext';

const FlowEntry = ({ document, field }) => {
	const { getValueAndStatus, dispatchLocalValueChange } = useContext(ControlValuesContext);
	const { v, s } = getValueAndStatus(document, field);

	return (
		<Box>
			<Typography variant="body1">Pump Time (min)</Typography>
			<TextField
				type="number"
				inputProps={{ step: 10 }}
				value={v}
				onChange={e => dispatchLocalValueChange({ document, field, newValue: Number(e.target.value) })}
				color={s ? "edited" : undefined}
				focused={s ? true : undefined}
			/>
		</Box>
	);
}

export default FlowEntry;