import React from "react";
import { Route, Routes } from "react-router-dom";
import theme from "../styling";

import Tolerances from "./ControlPages/Tolerances";
import Backwashing from "./ControlPages/Backwashing";
import FishFeeder from "./ControlPages/FishFeeder";
import Lights from "./ControlPages/Lights";
import WaterPump from "./ControlPages/WaterPump";

import { Grid, Stack, useMediaQuery } from "@mui/material";
import BubbleNavLinks from "../Components/BubbleNavLinks";

const ControlPanel = () => {
	const isSmall = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Grid container>
			{!isSmall && <Grid item xs="auto">
				<Stack alignItems="flex-start" spacing={1} sx={{ width: 200, p: 3 }}>
					<BubbleNavLinks links={[
						{ label: "Tolerances", addr: "tolerances" },
						{ label: "Backwashing", addr: "backwashing" },
						{ label: "Fish Feeder", addr: "fishFeeder" },
						{ label: "Lights", addr: "lights" },
						{ label: "Water Pump", addr: "waterPump" },
					]}/>
				</Stack>
			</Grid>}
			<Grid item xs>
				<Routes>
					<Route path="tolerances" element={<Tolerances/>}/>
					<Route path="backwashing" element={<Backwashing/>}/>
					<Route path="fishFeeder" element={<FishFeeder/>}/>
					<Route path="lights" element={<Lights/>}/>
					<Route path="waterPump" element={<WaterPump/>}/>
				</Routes>
			</Grid>
		</Grid>
	);
};

export default ControlPanel;
