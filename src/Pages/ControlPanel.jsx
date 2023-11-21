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
import { ctrlValsReducer, ControlValuesContext } from "../Hooks/ControlValuesContext";
import { collection, getDocs,query, onSnapshot } from "firebase/firestore";
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
	const [syncing, setSyncing] = useState(false)
	const [ctrlVals, dispatchCtrlVals] = useReducer(ctrlValsReducer, { remote: {}, local: {} });

	function delay(milliseconds){
		return new Promise(resolve => {
				setTimeout(resolve, milliseconds);
		});
	}

	const trackCollectionValues = (collName) => {
		//this is the listener for the realtime updates
		const unsubscribe = onSnapshot(collection(db, collName), { includeMetadataChanges: true }, async (querySnapshot) => {
			const pairs = querySnapshot.docs.map(doc => [doc.ref.path, doc.data()]);
			if (!querySnapshot.metadata.hasPendingWrites) {
				setSyncing(true)
				// why the 500ms delay? it's not functional. rather, it's a UX feature of sorts that gives users confirmation that data is being updated
				await delay(500)
				dispatchCtrlVals({ type: "update_remote", newRemote: Object.fromEntries(pairs) });
				setSyncing(false)
			} 
		});
		return () => {unsubscribe()};
	};

	const trackAllRemoteValues = () => {
		//this is the listener for the realtime updates
		const unsubscribes = systemControlsCollections.map((collName) => {
			return trackCollectionValues(collName);
		});

		return unsubscribes;
	};
	
	useEffect(() => {
		const unsubscribes = trackAllRemoteValues()
		return () => unsubscribes.forEach(unsubscribe => unsubscribe());
	}, []);

	const user = useContext(UserContext);
	const enabled = user !== null;

	return (
		<ControlValuesContext.Provider value={{
			ctrlVals,
			dispatchCtrlVals,
			reloadRemoteValues: trackAllRemoteValues,
		}}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<ControlsOverviewPanel syncing = {syncing}/>
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
