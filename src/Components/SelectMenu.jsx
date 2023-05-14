import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectMenu = ({ label, options, variable, setVariable }) => {
	return (
		<FormControl fullWidth size="medium">
			<InputLabel id={label}>{label}</InputLabel>
			<Select
				labelId={label}
				label={label}
				value={variable}
				onChange={event => setVariable(event.target.value)}
			>
				{options.map(({ value, display }) =>
					<MenuItem key={display} value={value}>
						{display}
					</MenuItem>)}
			</Select>
		</FormControl>
	);
};

export default SelectMenu
