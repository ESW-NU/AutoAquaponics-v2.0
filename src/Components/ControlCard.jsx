import { Paper, Typography, Box } from "@mui/material";

const ControlCard = ({title, children}) => {
	return (
		<Paper sx={{ p: 2, minHeight: 100 }}>
			<Typography variant="h3">{title}</Typography>
			<Box sx={{ paddingTop: 2, display: "flex", flexDirection: "row" }}>
				{children}
			</Box>
		</Paper>
	);
}

export default ControlCard;
