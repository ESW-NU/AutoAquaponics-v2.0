import { Stack, Typography, Grid } from '@mui/material';
import ControlCard from "../../Components/ControlCard";
import { systemStatMeta } from '../../systemMeta';
import NumericalControl from '../../Components/NumericalControl';

export const Tolerances = () => {
	const document = "tolerances";

	return (
		<Stack spacing={1}>
			<Typography variant="h2">Tolerances</Typography>
			<Grid
				container
				spacing={1}
				columns={{ xs: 1, md: 2, lg: 3 }}
			>
				{systemStatMeta.map(({ statKey, name }) => (
					<Grid item key={statKey} xs={1}>
						<ControlCard title={name}>
							<Stack spacing={1}>
								<NumericalControl
									label="max"
									document={`${document}/${statKey}`}
									field="max"
									verify={n => n >= 0}
								/>
								<NumericalControl
									label="min"
									document={`${document}/${statKey}`}
									field="min"
									verify={n => n >= 0}
								/>
							</Stack>
						</ControlCard>
					</Grid>
				))}
			</Grid>
		</Stack>
	)
}

export default Tolerances;
