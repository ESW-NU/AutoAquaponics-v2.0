import React, { useContext, useEffect, useReducer, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Grid, useMediaQuery } from "@mui/material";
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
import ControlsOverviewPanel from "../Components/ControlsOverviewPanel";
import { UserContext } from "../Hooks/UserContext";

const ControlPanel = () => {
	const isSmall = useMediaQuery(theme.breakpoints.down("md"));

	const [remoteValues, setRemoteValues] = useState(null);
	const fetchRemoteValues = () => {
		setRemoteValues(null);
		Promise.all(
			systemControlsCollections.map(collName => getDocs(collection(db, collName)))
		).then(querySnapshotArray => {
			// get an array of arrays of [path, data] pairs, then flatten it to a array of [path, data] pairs
			const pairs = querySnapshotArray.map(querySnapshot =>
				// get an array of [path, data] pairs
				querySnapshot.docs.map(doc => [doc.ref.path, doc.data()])
			).flat();
			setRemoteValues(Object.fromEntries(pairs));
		});
	};
	useEffect(() => fetchRemoteValues(), []);

	const localControlValuesReducer = (oldLocalValues, action) => {
		switch (action.type) {
			case "discard":
				return {};
			case "set_value":
				const { document, field, newValue} = action;
				const newLocalValues = structuredClone(oldLocalValues);
				if (remoteValues?.[document]?.[field] === newValue) {
					if (newLocalValues.hasOwnProperty(document) && newLocalValues[document].hasOwnProperty(field)) {
						delete newLocalValues[document][field];
						if (Object.keys(newLocalValues[document]).length === 0) {
							delete newLocalValues[document];
						}
					}
				} else {
					newLocalValues[document] = { ...newLocalValues[document], [field]: newValue};
				}
				return newLocalValues;
			default:
				return oldLocalValues;
		}
	};
	const [localValues, dispatchLocalValueChange] = useReducer(localControlValuesReducer, {});
	const getValueAndStatus = (document, field) => ({
		v: localValues[document]?.[field] ?? remoteValues?.[document]?.[field] ?? null, // null is the most sensible default until the remote values have been retrieved
		s: localValues[document]?.hasOwnProperty(field),
	});

	const user = useContext(UserContext);
	const enabled = user !== null;

	return (
		<ControlValuesContext.Provider value={{
			remoteValues,
			localValues,
			getValueAndStatus,
			dispatchLocalValueChange,
			reloadRemoteValues: fetchRemoteValues,
		}}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<ControlsOverviewPanel/>
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
						<Route index element={<Navigate replace to="tolerances"/>}/>
						<Route path="tolerances" element={<Tolerances enabled={enabled}/>}/>
						<Route path="backwashing" element={<Backwashing enabled={enabled}/>}/>
						<Route path="fishFeeder" element={<FishFeeder enabled={enabled}/>}/>
						<Route path="lights" element={<Lights enabled={enabled}/>}/>
						<Route path="waterPump" element={<WaterPump enabled={enabled}/>}/>
					</Routes>
				</Grid>
			</Grid>
		</ControlValuesContext.Provider>
	);
};

export default ControlPanel;
