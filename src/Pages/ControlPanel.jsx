import React, { useEffect, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Grid, Stack, useMediaQuery } from "@mui/material";
import theme from "../styling";
import { ControlValuesContext } from "../Hooks/ControlValuesContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { systemControlsCollections } from "../systemMeta";
import BubbleNavLinks from "../Components/BubbleNavLinks";
import Tolerances from "./ControlPages/Tolerances";
import Backwashing from "./ControlPages/Backwashing";
import FishFeeder from "./ControlPages/FishFeeder";
import Lights from "./ControlPages/Lights";
import WaterPump from "./ControlPages/WaterPump";

const ControlPanel = () => {
	const isSmall = useMediaQuery(theme.breakpoints.down("md"));

	const [remoteValues, setRemoteValues] = useState({});
	const fetchRemoteValues = () => {
		for (const collectionName of systemControlsCollections) {
			getDocs(collection(db, collectionName))
			.then(snapshot => {
				// use an updater here because the promises are fulfilled asynchronously
				setRemoteValues(oldRemoteValues => ({
					...oldRemoteValues,
					...Object.fromEntries(snapshot.docs.map(doc =>
						[`${collectionName}/${doc.id}`, doc.data()]
					)),
				}));
			})
			.catch(error => {
				console.log(error);
				console.log(`while retrieving ${collectionName}`)
			});
		}
	};
	useEffect(() => { fetchRemoteValues(); }, []);

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
