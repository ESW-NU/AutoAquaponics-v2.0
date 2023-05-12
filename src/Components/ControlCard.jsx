import { Paper, Typography, Box } from "@mui/material";

const overflowStyle = { whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" };

const ControlCard = ({title, children}) => {
	return (
		<Paper sx={{ p: 2, minHeight: 100 }}>
			<Typography variant="h3" sx={overflowStyle}>{title}</Typography>
			<Box sx={{ paddingTop: 2 }}>
				{children}
			</Box>
		</Paper>
	);
}

export default ControlCard;
