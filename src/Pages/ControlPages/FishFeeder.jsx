import React from "react";
import ComingSoon from "../../Components/ComingSoon";
import { Stack, Typography } from "@mui/material";

export const FishFeeder = ({ enabled }) => {
	return (
		<Stack spacing={1}>
			<Typography variant="h2">Fish Feeder</Typography>
			<ComingSoon/>
		</Stack>
	);
};

export default FishFeeder;
