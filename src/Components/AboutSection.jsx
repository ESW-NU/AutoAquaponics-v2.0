import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../CSS/pages.css"

const AboutSection = ({image_left, title, images, children}) => {
	const widths = (images.length > 1) ? {
		imageWidth: 1,
		textWidth: 1
	} : {
		imageWidth: 2,
		textWidth: 3
	} 	
	; // these will be ignored for smaller screens
	let totalWidth = 0;
	for (const item in widths) {
		totalWidth += widths[item];
	}

	const order = (image_left) ? ["images", "text"] : ["text", "images"];

	return (
		<div className="App">
			<div className="pages">
				<Card sx={{maxWidth: 2000, minHeight: 300, paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px'}}>
					<CardContent>
						<Grid container columns={totalWidth} alignItems="center" columnSpacing={5} rowSpacing={5}>
							<Grid item xs={totalWidth} lg={widths.imageWidth} size='contain' order={order.indexOf("images")}>
								<ImageGallery images={images}/>
							</Grid>
							<Grid item xs={totalWidth} lg={widths.textWidth} order={order.indexOf("text")}>
								<Typography variant="h2">{title}</Typography>
								<br/>
								<Typography className="about-text" variant="h6">{children}</Typography>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

const ImageGallery = ({images}) => {
	const imageGridItems = images.map((image) => {
		return (<Grid item xs={(images.length > 1) ? 1 : 2} size="contain">
			<img src={image} style={{width: "100%", height: "auto"}}/>
		</Grid>);
	});

	return (
		<Grid container columns={2} alignItems="center" columnSpacing={2}>
			{imageGridItems}
		</Grid>
	);
}

export default AboutSection;