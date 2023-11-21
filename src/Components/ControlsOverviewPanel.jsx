import { useContext } from "react";
import { Box, Button, LinearProgress, Paper, Stack, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ControlValuesContext } from "../Hooks/ControlValuesContext";
import { UserContext } from "../Hooks/UserContext";
import { db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";


const ControlsOverviewPanel = (props) => {
	const { ctrlVals, dispatchCtrlVals } = useContext(ControlValuesContext);
	const user = useContext(UserContext);
	const loading = Object.keys(ctrlVals.remote).length === 0;
	const edited = Object.entries(ctrlVals.local).length > 0;

	const submitDocChanges = () => {
		const local = ctrlVals.local;
		Promise.all(
			Object.keys(local).map(docPath => updateDoc(doc(db, docPath), local[docPath]))
		).catch(error => {
			console.log(error); // TODO make this a snackbar
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
				{loading || props.syncing ? (
					<>
						<Box sx={{ minWidth: 230 }}>Updating values...</Box>
						<Box sx={{ width: "100%" }}><LinearProgress/></Box>
					</>
				) : user === null ? (
					<Box sx={{ width: "100%" }}>
						Up to date! To make changes, <MuiLink component={RouterLink} to="/login">log in</MuiLink>
					</Box>
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
					</>
				) : (
					<Box sx={{ width: "100%" }}>Up to date!</Box>
						
				)}
			</Stack>
		</Paper>
	);
};

export default ControlsOverviewPanel;
