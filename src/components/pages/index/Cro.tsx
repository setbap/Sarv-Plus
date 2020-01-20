import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import one from "./image/one.jpg";
import two from "./image/two.jpg";
import three from "./image/three.jpg";

// @ts-ignore
import Carousel from "re-carousel";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	croPage: {
		zIndex: 1200,
		height: "50vh",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		flexDirection: "column-reverse",
		display: "flex",
		justifyContent: "center",
		backgroundBlendMode: "overlay",
	},
	croText: {
		width: "max-content",
		alignSelf: "center",
		margin: theme.spacing(2),
		padding: theme.spacing(3),
		borderRadius: `${theme.spacing(2)}px`,
		// border:`2px solid ${theme.palette.secondary.main}`,
		border: `2px solid rgba(60,60,60,0.5)`,
		zIndex: 1601,
		backdropFilter: "blur(15px)",
		color: theme.palette.secondary.main,
		backgroundColor: "rgba(60,60,60,0.5)",
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
		<div style={{ height: "50vh" }}>
			<CssBaseline />
			<Carousel loop auto>
				{items.map((i) => (
					<div
						key={i.name}
						style={{
							backgroundImage: `linear-gradient(to right, #39761F, #6E1335), url(${i.img})`,
						}}
						className={classes.croPage}
					>
						<div className={classes.croText}>
							<Typography variant="h4" component="div">
								<Box fontWeight={700} textAlign="center">
									{i.name}
								</Box>
							</Typography>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};
