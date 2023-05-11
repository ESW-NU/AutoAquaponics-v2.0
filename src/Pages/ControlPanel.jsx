import React, { useEffect, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Grid, Paper, useMediaQuery } from "@mui/material";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HeightIcon from '@mui/icons-material/Height';
import WavesIcon from '@mui/icons-material/Waves';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from '@fortawesome/free-solid-svg-icons'
import theme from "../styling";
import { ControlValuesContext } from "../Hooks/ControlValuesContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { systemControlsCollections } from "../systemMeta";
import NavLinksPanel from "../Components/NavLinksPanel";
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
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper sx={{ p: 2 }}>STUFF HERE</Paper>
				</Grid>
				<Grid item xs={12} md="auto">
					<NavLinksPanel fullWidth={isSmall} links={[
						{ label: "Tolerances", addr: "tolerances", icon: <HeightIcon/> },
						{ label: "Backwashing", addr: "backwashing", icon: <WavesIcon/>},
						{ label: "Fish Feeder", addr: "fishFeeder", icon: <FastfoodIcon/> },
						{ label: "Lights", addr: "lights", icon: <LightbulbIcon/> },
						{ label: "Water Pump", addr: "waterPump", icon: <FontAwesomeIcon icon={faFan}/> },
					]}/>
				</Grid>
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
