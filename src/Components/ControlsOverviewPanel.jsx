import { useContext } from "react";
import { Box, Button, LinearProgress, Paper, Stack, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ControlValuesContext } from "../Hooks/ControlValuesContext";
import { UserContext } from "../Hooks/UserContext";
import { db } from "../firebase";
import { updateDoc } from "firebase/firestore";


const ControlsOverviewPanel = () => {
	const { ctrlVals, dispatchCtrlVals, reloadRemoteValues } = useContext(ControlValuesContext);
	const user = useContext(UserContext);
	const loading = ctrlVals.remote === null;
	const edited = Object.entries(ctrlVals.local).length > 0;

	const submitDocChanges = () => {
		console.log(ctrlVals);
		return; // UNTESTED CODE BELOW; BEWARE
		localValues = { "testingcollection/testingdoc" : { "one": 1, "two": "dos" } };
		Promise.all(
			Object.keys(localValues).map(docPath => updateDoc(doc(db, docPath), localValues[docPath]))
		).then(() => {
			reloadRemoteValues(true);
		}).catch(error => {
			console.log(error);
			reloadRemoteValues(false);
		})
	};

	const color = loading ?
		"common.white"
	: user === null ?
		"common.white"
	: edited ?
		"edited.light"
	:
		"primary.light";

	return (
		<Paper sx={{ p: 2, typography: "body1", border: 2, borderColor: color }}>
			<Stack direction="row" spacing={1} justifyContent="flex-end" alignItems="center">
				{loading ? (
					<>
						<Box sx={{ minWidth: 230 }}>Loading current values...</Box>
						<Box sx={{ width: "100%" }}><LinearProgress/></Box>
					</>
				) : user === null ? (
					<>
						<Box sx={{ width: "100%" }}>
							Up to date! To make changes, <MuiLink component={RouterLink} to="/login">log in</MuiLink>
						</Box>
						<Button
							variant="text"
							onClick={() => reloadRemoteValues(false)}
						>Refresh</Button>
					</>
				) : edited ? (
					<>
						<Box sx={{ width: "100%" }}>You have unsaved changes!</Box>
						<Button
							variant="contained"
							onClick={submitDocChanges}
						>Save</Button>
						<Button
							variant="text"
							color="warning"
							onClick={() => dispatchCtrlVals({ type: "discard_local" })}
						>Discard</Button>
						<Button
							variant="text"
							onClick={() => reloadRemoteValues(false)}
						>Refresh</Button>
					</>
				) : (
					<>
						<Box sx={{ width: "100%" }}>Up to date!</Box>
						<Button
							variant="text"
							onClick={() => reloadRemoteValues(false)}
						>Refresh</Button>
					</>
				)}
			</Stack>
		</Paper>
	);
};

export default ControlsOverviewPanel;
