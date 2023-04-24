/*
Each element in this array represents a statistic that the dashboard will track; updating this
object will cause the dashboard to update which stats it tracks.
*/
export const dashboardTrackedStats = [
	{ key: "TDS", name: "Total Dissolved Solids", unit: "ppm" },
	{ key: "air_temp",  name: "Air Temperature", unit: "ºC" },
    { key: "distance", name: "Water Level", unit: "cm" },
    { key: "humidity", name: "Humidity", unit: "%" },
    { key: "pH", name: "pH", unit: "" },
    { key: "water_temp", name: "Water Temperature", unit: "ºC" },
];
