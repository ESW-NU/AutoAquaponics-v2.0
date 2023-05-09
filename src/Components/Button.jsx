import { Button as MuiButton } from "@mui/material";

const Button = ({ onClick, disabled = false, children }) => {
	return (
		<MuiButton
			variant="contained"
			color="clickme"
			sx={{
				borderRadius: 100,
				px: 2,
				typography: "link",
				color: "common.white",
			}}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</MuiButton>
	)
};

export default Button;
