import { Stack, Typography, Grid } from '@mui/material';
import ControlCard from "../../Components/ControlCard";
import { systemStatMeta } from '../../systemMeta';
import NumericalControl from '../../Components/NumericalControl';

export const Tolerances = ({ enabled }) => {
	const collection = "tolerances";

	return (
		<Stack spacing={1}>
			<Typography variant="h2">Tolerances</Typography>
			<Grid
				container
				spacing={1}
				columns={{ xs: 1, sm: 2, lg: 3 }}
			>
				{systemStatMeta.map(({ statKey, name }) => (
					<Grid item key={statKey} xs={1}>
						<ControlCard title={name}>
							<Stack spacing={1}>
								<NumericalControl
									label="max"
									document={`${collection}/${statKey}`}
									field="max"
									enabled={enabled}
									verify={n => n >= 0}
								/>
								<NumericalControl
									label="min"
									document={`${collection}/${statKey}`}
									field="min"
									enabled={enabled}
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
