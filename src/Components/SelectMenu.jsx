import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectMenu = ({ label, options, variable, setVariable }) => {
	const typographyVariant = "body2"; // necessary because we have to set typography in multiply
	// places; I have tried wrapping it in a Typography component and using sx prop.

	return (
		<FormControl fullWidth size="medium">
			<InputLabel sx={{ typography: typographyVariant }} id={label}>{label}</InputLabel>
			<Select
				sx={{ typography: typographyVariant }}
				labelId={label}
				label={label}
				value={variable}
				onChange={event => setVariable(event.target.value)}
			>
				{options.map(({ value, display }) =>
					<MenuItem
						sx={{ typography: typographyVariant }}
						value={value}
					>
						{display}
					</MenuItem>)}
			</Select>
		</FormControl>
	);
};

export default SelectMenu
