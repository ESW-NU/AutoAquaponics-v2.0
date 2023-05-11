import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import theme from "../styling";
import { ControlValuesContext } from "../Hooks/ControlValuesContext";

import Tolerances from "./ControlPages/Tolerances";
import Backwashing from "./ControlPages/Backwashing";
import FishFeeder from "./ControlPages/FishFeeder";
import Lights from "./ControlPages/Lights";
import WaterPump from "./ControlPages/WaterPump";

import { Grid, Stack, useMediaQuery } from "@mui/material";
import BubbleNavLinks from "../Components/BubbleNavLinks";

const ControlPanel = () => {
	const isSmall = useMediaQuery(theme.breakpoints.down("md"));

	const remoteValues = {
		a: "alice",
		b: "bob",
		"water-pump": {
			"status": "on",
			"bed-A-flow": 10,
			"bed-B-flow": 11,
		},
	}; // TODO populate with actual firebase values
	const localControlValuesReducer = (oldLocalValues, { document, field, newValue }) => {
		const newLocalValues = structuredClone(oldLocalValues);
		if (remoteValues[document]?.[field] === newValue) {
			delete newLocalValues[document][field];
			if (Object.keys(newLocalValues[document]).length === 0) {
				delete newLocalValues[document];
			}
		} else {
			newLocalValues[document] = { ...newLocalValues[document], [field]: newValue};
		}
		return newLocalValues;
	};
	const [localValues, dispatchLocalValueChange] = useReducer(localControlValuesReducer, {});
	const getValueAndStatus = (document, field) => ({
		v: localValues[document]?.[field] ?? remoteValues[document]?.[field] ?? null, // null is the most sensible default until the remote values have been retrieved
		s: localValues[document]?.hasOwnProperty(field),
	});

	return (
		<ControlValuesContext.Provider value={{
			remoteValues,
			getValueAndStatus,
			dispatchLocalValueChange,
		}}>
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
		</ControlValuesContext.Provider>
	);
};

export default ControlPanel;
