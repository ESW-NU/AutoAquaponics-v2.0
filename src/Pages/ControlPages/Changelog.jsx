import { forwardRef } from "react";
import { Paper, Stack, Typography, Grid } from "@mui/material";

const data = [
	{ a: "one", b: "two", c: "three" },
	{ a: "uno", b: "dos", c: "tres" },
];

/* This code is copypasted lol take a look at https://mui.com/material-ui/react-table/#virtualized-table
I still haven't copypasted everything over yet; trying to make sure I understand what's going on - Andre */
/* const VirtuosoTableComponents = {
	Scroller: forwardRef((props, ref) => (
		<TableContainer component={Paper} {...props} ref={ref} />
	)),
	Table: (props) => (
		<Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
	),
	TableHead,
	TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
	TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
} */

const Changelog = () => {
	return (
		<Stack spacing={1}>
			<Typography variant="h2">Changelog</Typography>
			<Paper sx={{ p: 2 }}>
				Table goes here
				{/* <TableVirtuoso
					data={data}
					components={VirtuosoTableComponents}
					fixedHeaderContent={fixedHeaderContent}
					itemContent={rowContent}
				/> */}
			</Paper>
		</Stack>
	);
};

export default Changelog;
