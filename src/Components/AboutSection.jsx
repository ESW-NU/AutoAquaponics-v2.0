import { Paper, Typography, Box, Grid, ImageList, ImageListItem } from "@mui/material";

const AboutSection = ({ image_left, title, images, children }) => {
	const text = (
		<Box sx={{ typography: "body1" }}>
			<Typography variant="h2">{title}</Typography>
			{children}
		</Box>
	);
	const imageList = (
		<ImageList cols={Math.ceil(Math.sqrt(images.length))}>
			{images.map(image => (<ImageListItem key={image}>
				<img src={image} alt={title + "image"}/>
			</ImageListItem>))}
		</ImageList>
	);

	return (
			<Paper sx={{ minHeight: 300, p: 2 }}>
			<Grid
				container
				columns={2}
				direction={{
					xs: "column",
					md: (image_left ? "row-reverse" : "row"),
				}}
				alignItems="center"
				spacing={3}
			>
				<Grid item xs={1}>{text}</Grid>
				<Grid item xs={1}>{imageList}</Grid>
			</Grid>
		</Paper>
	)
};

export default AboutSection;
