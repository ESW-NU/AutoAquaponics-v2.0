import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Paper, Typography, useTheme } from "@mui/material";

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

	const [color, gradientName] = isGreen ? [colorGood, gradientGoodName] : [colorBad, gradientBadName];

	const renderTooltip = ({ active, payload }) => {
		// use early return to prevent running into undefined values
		if (!active) { return false; }

		const point = payload[0].payload; // don't ask; the documentation for recharts is terrible
		return active && (
			<Paper sx={{ p: 1, width: 170 }}>
				<Typography variant="body3">{new Date(point.x * 1000).toLocaleString()}</Typography>
				<Typography variant="body1">
					{Number.isNaN(point.y) ? "bad reading" : `${point.y} ${unit}`}
				</Typography>
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

export default AreaGraph;
