/*
Each element in this array represents a statistic that the dashboard will track and that the
tolerances control page will control; updating this object will cause both pages to change too
*/
export const systemStatMeta = [
	{ statKey: "TDS", name: "Total Dissolved Solids", unit: "ppm" },
	{ statKey: "air_temp",  name: "Air Temperature", unit: "ºC" },
    { statKey: "distance", name: "Water Level", unit: "cm" },
    { statKey: "humidity", name: "Humidity", unit: "%" },
    { statKey: "pH", name: "pH", unit: "" },
    { statKey: "water_temp", name: "Water Temperature", unit: "ºC" },
];
