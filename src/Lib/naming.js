export const unitDict = {
    TDS: "ppm",
    air_temp: "ºC",
    distance: "cm",
    humidity: "%",
    pH: "",
    unix_time: "",
    water_temp: "ºC"
}

export const officialNameDict = {
    TDS: "Total Dissolved Solids",
    air_temp: "Air Temperature",
    distance: "Water Level",
    humidity: "Humidity",
    pH: "pH",
    unix_time: "Unix Time",
    water_temp: "Water Temperature"
}

export function dashboardKeys(officialNameDict) {

    const keys = Object.keys(officialNameDict);

    let dbKeys = [];
    Object.entries(officialNameDict).forEach(([key, value]) => {
        if (key !== 'unix_time') { dbKeys.push(key); }
    }); 

    return dbKeys;
}
