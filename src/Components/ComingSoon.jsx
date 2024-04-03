import { Box } from "@mui/material";

const ComingSoon = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems:"center",
				height: "70vh",
				color: "primary.main",
				typography: "h1"
			}}
		>
			COMING SOON
		</Box>
	);
};

export default ComingSoon;