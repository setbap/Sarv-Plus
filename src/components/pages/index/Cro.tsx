import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import one from "./image/one.jpg";
import two from "./image/two.jpg";
import three from "./image/three.jpg";
import four from "./image/four.jpg";

// @ts-ignore
import Carousel from "re-carousel";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	croPage: {
		zIndex: 1200,
		height: "90vh",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "50% 50%",
		backgroundColor: "red",
		flexDirection: "column-reverse",
		display: "flex",

		// backgroundBlendMode: "color-dodge",
	},
	croText: {
		width: "max-content",
		height: "100px",
		alignSelf: "center",
		margin: theme.spacing(2),
		padding: theme.spacing(2),
		borderRadius: theme.shape.borderRadius,
		zIndex: 1601,
		color: theme.palette.text.secondary,
		backgroundColor: theme.palette.background.paper,
		bottom: "0",
	},
}));

export const Cro = () => {
	const classes = useStyles();
	const items = [
		{
			name: "بهترین تور دنیا",
			img: one,
		},
		{
			name: "ما خیلی خوبیم ",
			img: two,
		},
		{
			name: "پولتان نزد ما امانت",
			img: three,
		},
	];

	return (
		<div style={{ height: "90vh" }}>
			<CssBaseline />
			<Carousel loop auto>
				{items.map((i) => (
					<div
						key={i.name}
						style={{ backgroundImage: `url(${i.img})` }}
						className={classes.croPage}
					>
						<div className={classes.croText}>
							<Typography variant="h2" component="div">
								<Box textAlign="center">{i.name}</Box>
							</Typography>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};
