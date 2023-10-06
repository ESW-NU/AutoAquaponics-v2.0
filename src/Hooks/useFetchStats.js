import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, where, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { systemStatMeta } from "../systemMeta";

/*
Returns { loading, stats, tolerances } where stats is an array of objects representating the stats
at a certain time and tolerances is the an object where each property's
key is the key of a dashboard-tracked stat, and the value is a { min, max } object.

Data type of stats: {
	unixTime: number,
	stats: {
		[k: string]: any
	},
}[]

Data type of tolerances: {
	[k: string]: {
		min: number,
		max: number,
	},
}
*/
export function useFetchStats(timeBounds) {
	const [loading, setLoading] = useState(true);

	// get stats
	const [stats, setStats] = useState([]);
	useEffect(() => {
		setLoading(true);
    const q = query( // the data we want to fetch
      collection(db, 'stats'),
      where('unix_time', '>', timeBounds[0]),
      where('unix_time', '<', timeBounds[1]),
      orderBy('unix_time', 'asc')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => { // real-time listener for changes to the queried stats data
      setStats(convertStatsSnapshot(snapshot));
			setLoading(false);
    });
    return () => {
      unsubscribe(); // make sure to unsubscribe when the component unmounts cause idek but like efficiency probably
    }
	}, [timeBounds[0], timeBounds[1]]); // specify the bounds individually, otherwise React thinks the bounds changed and will re-run the Effect

	// get tolerances
	const [tolerances, setTolerances] = useState({});
	useEffect(() => {
    const q = query(
      collection(db, 'tolerances')
    )
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTolerances(convertTolerancesSnapshot(snapshot))
    });
    return() => {
      unsubscribe()
    }
	}, []);

	return { loading, stats, tolerances };
}

/*
Takes an snapshot of the 'stats' collection on Firestore and converts it to an array of objects
each representing the stats at a certain time. (see comment on useFetchStats for the data type)
*/
function convertStatsSnapshot(snapshot) {
	return snapshot.docs.map(doc => ({
		unixTime: doc.get("unix_time"),
		stats: Object.fromEntries(systemStatMeta.map(({ statKey }) => [statKey, doc.get(statKey)])),
	}));
}

/*
Takes a snapshot of the 'tolerances' collection on Firestore and converts it to an object that maps
stat keys to their tolerances. (see comment on useFetchStats for the data type)
*/
function convertTolerancesSnapshot(snapshot) {
	return Object.fromEntries(snapshot.docs.map(doc => [doc.id, doc.data()]));
}
