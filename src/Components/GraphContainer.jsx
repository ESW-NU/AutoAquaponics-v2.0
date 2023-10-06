import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from '../firebase';
import GraphCard from "./GraphCard";
import { Grid, Alert } from "@mui/material";
import { systemStatMeta } from "../systemMeta";
import { useFetchStats } from "../Hooks/useFetchStats";
import { Fade } from 'react-awesome-reveal';

const GraphContainer = ({ timeBounds, zoom }) => {
	const { loading, stats, tolerances } = useFetchStats(timeBounds);

	// idiocy ensues
	const [doxxedPpl, setDoxxedPpl] = useState([]);
	const doxx = async () => {
		getDocs(query(collection(db, 'harassment-targets')))
		.then(snapshot => {
			setDoxxedPpl(snapshot.docs.map(doc => ({ name: doc.get("name"), phoneNum: doc.get("phone") })));
		});
	};
	useEffect(() => {
		doxx();
	}, []);
	const existsBadReading = !loading && (stats.length == 0 || Object.values(stats.at(-1).stats).includes(NaN));
	//

	return (
		<>
			{existsBadReading && <Alert sx={{ my: 3 }} severity="error">
				You may have noticed some sensors aren't working properly. This is 100% the fault of
				the electronics team. Please direct your complaints and harassment
				to {doxxedPpl.map(({ name, phoneNum}) => `${name} (${phoneNum})`).join(" and ")}.
			</Alert>}
			<Grid
				container
				spacing={1}
				columns={{ xs: 1, md: 2, lg: 3 }}
			>
				{systemStatMeta.map(({ statKey, name, unit }, index) => (
					<Grid item xs={1} key={statKey}>
						<Fade cascade={true} duration={1000} delay={index*200} triggerOnce> 
						<GraphCard
							name={name}
							unit={unit}
							statKey={statKey}
							loading={loading}
							stats={stats}
							tolerance={tolerances.hasOwnProperty(statKey) ? tolerances[statKey] : { min: 0, max: 0 }} // in case tolerances haven't loaded in yet
							timeBounds={timeBounds}
							zoom={zoom}
						/>
						</Fade>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default GraphContainer;
