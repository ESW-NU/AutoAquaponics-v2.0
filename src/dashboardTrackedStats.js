/*
Each element in this array represents a statistic that the dashboard will track; updating this
object will cause the dashboard to update which stats it tracks.
*/
export const dashboardTrackedStats = [
	{ statKey: "TDS", name: "Total Dissolved Solids", unit: "ppm" },
	{ statKey: "air_temp",  name: "Air Temperature", unit: "ºC" },
    { statKey: "distance", name: "Water Level", unit: "cm" },
    { statKey: "humidity", name: "Humidity", unit: "%" },
    { statKey: "pH", name: "pH", unit: "" },
    { statKey: "water_temp", name: "Water Temperature", unit: "ºC" },
];
