import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Paper, Typography, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from '../firebase';
import { UserContext } from "../Hooks/UserContext";

const colorGood = "#009444";
const colorBad = "red";
const gradientGoodName = "gradientGood";
const gradientGood = (
	<linearGradient id={gradientGoodName} x1="0" y1="0" x2="0" y2="1">
		<stop offset="25%" stopColor={colorGood} stopOpacity={1} />
		<stop offset="95%" stopColor={colorGood} stopOpacity={0.5} />
	</linearGradient>
);
const gradientBadName = "gradientBad";
const gradientBad = (
	<linearGradient id={gradientBadName} x1="0" y1="0" x2="0" y2="1">
		<stop offset="25%" stopColor={colorBad} stopOpacity={1} />
		<stop offset="95%" stopColor={colorBad} stopOpacity={0.5} />
	</linearGradient>
);

const AreaGraph = ({ name, unit, stats, isGreen, timeBounds, zoom }) => {
	const theme = useTheme();

	// idiocy ensues
	const user = useContext(UserContext);
	const [yannisPhoneNumber, setYannisPhoneNumber] = useState("");
	const fetchYannisPhoneNumber = async () => {
		getDocs(
			query(
				collection(db, 'harassment-targets'),
				where('name', '==', "Yanni"),
			)
		).then(snapshot => {
			setYannisPhoneNumber(snapshot.docs[0].data().phone);
		});
	}
	useEffect(() => {
		fetchYannisPhoneNumber();
	})
	//


	const [color, gradientName] = isGreen ? [colorGood, gradientGoodName] : [colorBad, gradientBadName];

	const renderTooltip = ({ active, payload }) => {
		// use early return to prevent running into undefined values
		if (!active) { return false; }

		const point = payload[0].payload; // don't ask; the documentation for recharts is terrible
		return active && (
			<Paper sx={{ p: 1, width: 170 }}>
				<Typography variant="body3">{new Date(point.x * 1000).toLocaleString()}</Typography>
				{Number.isNaN(point.y) ? <Typography variant="body1">direct complaints and harassment to {user === null ? "REDACTED" : yannisPhoneNumber}</Typography>
				: <Typography variant="body1">{point.y} {unit}</Typography>}
			</Paper>
		);
	};

	return (
		<ResponsiveContainer>
			<AreaChart
				data={stats}
				margin={{ left: -20}} // left margin strays too far; is there a better way to fix?
			>
				<defs>
					{gradientGood}
					{gradientBad}
				</defs>
				{/* Why is the documentation in ReCharts so bad ;-; Dear maintainer, if you care
				enough then feel free to switch libraries lol */}
				<CartesianGrid strokeDasharray="3 3"/>
				<XAxis
					dataKey="x"
					tickFormatter={(unixTime) => new Date(unixTime * 1000).toLocaleString([], { dateStyle: "short", timeStyle: "short" })}
					scale="utc"
					type="number"
					domain={zoom ? ['dataMin', 'dataMax'] : timeBounds}
					style={theme.typography.body3}
					interval="preserveStartEnd"
				/>
				<YAxis style={theme.typography.body3} domain={[0, 'auto']} allowDataOverflow={true}/>
				<Area
					dataKey="y"
					name={name}
					unit={unit}
					type="monotone"
					stroke={color}
					fillOpacity={1}
					fill={`url(#${gradientName})`}
					isAnimationActive
				/>
				<Tooltip style={theme.typography.body3} content={renderTooltip}/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

async function getYannisPhoneNumber() {
	return (await getDocs(
		query(
			collection(db, 'harassment-targets'),
			where('name', '==', "Yanni"),
		)
	)).docs[0].data().phone;
}

export default AreaGraph;
