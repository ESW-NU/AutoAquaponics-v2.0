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

	const [ctrlVals, dispatchCtrlVals] = useReducer(ctrlValsReducer, { remote: null, local: {} });

  const fetchRemoteValues = () => {
    console.log("fetching remote values");
		Promise.all(
			systemControlsCollections.map(collName => getDocs(collection(db, collName)))
		).then(querySnapshotArray => {
			// get an array of arrays of [path, data] pairs, then flatten it to a array of [path, data] pairs
			const pairs = querySnapshotArray.map(querySnapshot =>
				// get an array of [path, data] pairs
				querySnapshot.docs.map(doc => [doc.ref.path, doc.data()])
			).flat();
			dispatchCtrlVals({ type: "set_remote", newRemote: Object.fromEntries(pairs) });
		});
	};

  const trackCollectionValues = (collName, discardLocal) => {
    //this is the listener for the realtime updates
    const unsubscribe = onSnapshot(collection(db, collName), (querySnapshot) => {
      console.log("tracking changes in remote values");
      const pairs = querySnapshot.docs.map(doc => [doc.ref.path, doc.data()]);
      if (discardLocal) {
        // do this first to avoid the unnecessary checks in replace_remote
        dispatchCtrlVals({ type: "discard_local" });
      }
      dispatchCtrlVals({ type: "replace_remote", newRemote: Object.fromEntries(pairs) });
    });
    return () => unsubscribe();
  };

  const trackAllRemoteValues = (discardLocal) => {
      //this is the listener for the realtime updates
      const unsubscribes = systemControlsCollections.map((collName) => {
        return trackCollectionValues(collName, discardLocal);
      });
      return unsubscribes;
  };
  
  useEffect(() => {
    fetchRemoteValues()
    const unsubscribes = trackAllRemoteValues(false)
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
