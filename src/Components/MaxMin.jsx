import { useContext } from 'react';
import { ControlValuesContext } from '../Hooks/ControlValuesContext';
import { Stack, TextField } from '@mui/material';

const MaxMin = ({ document }) => {
	const { getValueAndStatus, dispatchLocalValueChange } = useContext(ControlValuesContext);
    const { v: maxV, s: maxS } = getValueAndStatus(document, "max");
	const { v: minV, s: minS } = getValueAndStatus(document, "min");

	return (
		<Stack spacing={1}>
			<TextField
				label="max"
				fullWidth
				type="number"
				value={maxV}
				onChange={e => dispatchLocalValueChange({ document, field: "max", newValue: Number(e.target.value) })}
				color={maxS ? "edited" : undefined}
				focused={maxS ? true : undefined}
			/>
			<TextField
				label="min"
				fullWidth
				type="number"
				value={minV}
				onChange={e => dispatchLocalValueChange({ document, field: "min", newValue: Number(e.target.value) })}
				color={minS ? "edited" : undefined}
				focused={minS ? true : undefined}
			/>
		</Stack>
	);
}

export default MaxMin;