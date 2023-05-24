import { forwardRef } from "react";
import { Paper, Stack, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const data = [
	{ a: "one", b: "two", c: "three" },
	{ a: "uno", b: "dos", c: "tres" },
];

const Changelog = () => {
	return (
		<Stack spacing={1}>
			<Typography variant="h2">Changelog</Typography>
			<Paper sx={{ p: 2, height: '65vh', overflow: 'auto' }}>
				<TableContainer>
					<Table stickyHeader>
						<TableHead>
							<TableRow>
								<TableCell style={{width: '20%'}}>Name</TableCell>
								<TableCell style={{width: '20%'}}>Date</TableCell>
								<TableCell>Changes</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((item, index) => (
								<TableRow key={index}>
									<TableCell>{item.a}</TableCell>
									<TableCell>{item.b}</TableCell>
									<TableCell>{item.c}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Stack>
	);
};

export default Changelog;