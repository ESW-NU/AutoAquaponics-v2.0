import { useContext } from "react";
import { Box, Button, LinearProgress, Paper, Stack } from "@mui/material";
import { ControlValuesContext } from "../Hooks/ControlValuesContext";
import { UserContext } from "../Hooks/UserContext";

const ControlsOverviewPanel = () => {
	const { remoteValues, localValues, dispatchLocalValueChange, reloadRemoteValues } = useContext(ControlValuesContext);
	const user = useContext(UserContext);
	const loading = remoteValues === null;
	const edited = Object.entries(localValues).length > 0;

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
							Up to date! To make changes, log in.
						</Box>
						<Button
							variant="text"
							onClick={reloadRemoteValues}
						>Refresh</Button>
					</>
				) : edited ? (
					<>
						<Box sx={{ width: "100%" }}>You have unsaved changes!</Box>
						<Button
							variant="contained"
						>Save</Button>
						<Button
							variant="text"
							color="warning"
							onClick={() => dispatchLocalValueChange({ type: "discard" })}
						>Discard</Button>
						<Button
							variant="text"
							onClick={reloadRemoteValues}
						>Refresh</Button>
					</>
				) : (
					<>
						<Box sx={{ width: "100%" }}>Up to date!</Box>
						<Button
							variant="text"
							onClick={reloadRemoteValues}
						>Refresh</Button>
					</>
				)}
			</Stack>
		</Paper>
	);
};

export default ControlsOverviewPanel;
