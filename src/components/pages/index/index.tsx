import React from "react";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import { Link as RLink } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import respect from "./image/respect.png";
import spec from "./image/spec.png";
import safe from "./image/safe.png";
import { get_lastest_tours } from "../../../actions/explore_tours";
import { get_lastest_orgs } from "../../../actions/explore_orgs";
import { useHistory } from "react-router-dom";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	itemSpace: {
		marginTop: theme.spacing(2),
	},
	aboutMargin: {
		marginBottom: theme.spacing(2),
	},
	icon: {
		marginRight: theme.spacing(2),
		marginLeft: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	cardMedia: {
		paddingTop: "56.25%", // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},

	about: {
		backgroundColor: theme.palette.secondary.light,
		padding: theme.spacing(6),
	},
	aboutItem: {
		transition: "all 1s",
		"&:hover": {
			backgroundColor: "white",
			transform: "scale(1.1)",
			borderRadius: theme.shape.borderRadius,
		},
	},

	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
	textCen: {
		textAlign: "center",
	},
}));

export default function Index() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(get_lastest_tours());
		dispatch(get_lastest_orgs());
		// eslint-disable-next-line
	}, []);

	const { tours } = useSelector((state: any) => {
		if (state.tours.tours) {
			return state.tours.tours;
		}
		return { tours: [] };
	}, shallowEqual);
	const { orgs } = useSelector((state: any) => {
		if (state.orgs.orgs) {
			return state.orgs.orgs;
		}
		return { orgs: [] };
	}, shallowEqual);
	return (
		<React.Fragment>
			<main>
				{/* Hero unit */}
				<div className={classes.heroContent}>
					<Container maxWidth="lg">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom
						>
							جیجو
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="textSecondary"
							paragraph
						>
							Something short and leading about the collection
							below—its contents, the creator, etc. Make it short
							and sweet, but not too short so folks don&apos;t
							simply skip over it entirely.
						</Typography>
						<div className={classes.heroButtons}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Button variant="contained" color="primary">
										Main call to action
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">
										Secondary action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						<div
							style={{ width: "100%" }}
							className={classes.itemSpace}
						>
							<Box display="flex" p={1}>
								<Box p={1}>
									<Typography variant="h6">
										<Box fontWeight="fontWeightBold">
											آخرین تور ها
										</Box>
									</Typography>
								</Box>
								<Box p={3} flexGrow={1}>
									<Divider />
								</Box>
								<Box p={1}>
									<Typography variant="h6">
										<Box fontWeight="fontWeightBold">
											<RLink to="/as">بیشتر</RLink>
										</Box>
									</Typography>
								</Box>
							</Box>
						</div>
						{(tours || []).map((card: any) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image={card.image}
										title="Image title"
									/>
									<CardContent
										className={classes.cardContent}
									>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
										>
											{card.name}
										</Typography>
										<Typography>
											<Box> از{card.sourcePlace} </Box>
											<Box>
												{" "}
												به {card.destinationPlace}{" "}
											</Box>
											<Box>هزینه {card.price}</Box>
											<Box>
												ظرفیت باقی مانده:{" "}
												{card.remainingCapacity}
											</Box>
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											color="primary"
											onClick={() =>
												history.push(`/tour/${card.id}`)
											}
										>
											مشاهده
										</Button>
										<Button size="small" color="primary">
											عضویت
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>

					<Grid container spacing={4}>
						<div
							style={{ width: "100%" }}
							className={classes.itemSpace}
						>
							<Box display="flex" p={1}>
								<Box p={1}>
									<Typography variant="h6">
										<Box fontWeight="fontWeightBold">
											بهترین سازمان ها
										</Box>
									</Typography>
								</Box>
								<Box p={3} flexGrow={1}>
									<Divider />
								</Box>
								<Box p={1}>
									<Typography variant="h6">
										<Box fontWeight="fontWeightBold">
											<RLink to="/as">بیشتر</RLink>
										</Box>
									</Typography>
								</Box>
							</Box>
						</div>
						{(orgs || []).map((card: any) => (
							<Grid item key={card.id} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image="https://source.unsplash.com/random"
										title="Image title"
									/>
									<CardContent
										className={classes.cardContent}
									>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
										>
											نام تور
										</Typography>
										<Typography>
											توضیحات تور شش یشسیهاشس یعشسای مهش
											سیکاش یح شسی شسی شسیشس یشسهیت شسهی
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" color="primary">
											مشاهده
										</Button>
										<Button size="small" color="primary">
											عضویت
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			{/* Footer */}

			{/* about us */}
			<div className={classes.about}>
				<Box m="3">
					<Typography variant="h3">
						<Box textAlign="center" className={classes.aboutMargin}>
							جرا جیجو !!!!!
						</Box>
					</Typography>
				</Box>
				<Container maxWidth="lg">
					<Grid container spacing={6} justify="center">
						<Grid item xs={12} sm={6} md={4}>
							<Box
								className={classes.aboutItem}
								display="flex"
								flexDirection="column"
								textAlign="center"
								p={1}
							>
								<Box alignSelf="center">
									<img
										src={respect}
										width="64"
										alt="respect"
									/>
								</Box>
								<Box p={2}>
									<Typography variant="h5">
										{" "}
										تور طبیعت گردی خاص
									</Typography>
								</Box>
								<Typography variant="body1">
									<Box p={2} textAlign="justify">
										تجربه سالیان، به تیم جیجو این امکان را
										داده است که در تور های طبیعت گردی و تور
										های خارجی خود، شما را به دیدن شهر ها و
										مقاصد بکر و خاص در نوروز 99 و تور کوبا و
										تور ژاپن ببرد
									</Box>
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Box
								className={classes.aboutItem}
								display="flex"
								flexDirection="column"
								textAlign="center"
								p={1}
							>
								<Box alignSelf="center">
									<img src={spec} width="64" alt="respect" />
								</Box>
								<Box p={2}>
									<Typography variant="h5">
										اعتماد به خدمات تور
									</Typography>
								</Box>
								<Typography variant="body1">
									<Box p={2} textAlign="justify">
										جیجو با اجرای متعهدانه، سعی در ارائه
										خدمات تور طبیعت گردی، تور های مکزیک و
										تور نپال بر اساس توضیحات سایت را داشته،
										تلاش خود را میکند تا بهترین تجربه را در
										تور های نوروز 99 ارائه دهدتور ژاپن ببرد
									</Box>
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Box
								className={classes.aboutItem}
								display="flex"
								flexDirection="column"
								textAlign="center"
								p={1}
							>
								<Box alignSelf="center">
									<img src={safe} width="64" alt="respect" />
								</Box>
								<Box p={2}>
									<Typography variant="h5">
										{" "}
										امنیت در تور
									</Typography>
								</Box>
								<Typography variant="body1">
									<Box p={2} textAlign="justify">
										از آنجا که جیجو میداند آرامش خاطر در
										تورهای طبیعت گردی، تور ژاپن، تور نپال و
										تور کوبا از مهمترین خواسته های مسافران
										است با ایجاد فضای دوستانه ، خیال شما را
										از این خاطر در تور راحت کرده ایم
									</Box>
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</div>
			{/* End about us */}

			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="textSecondary"
					component="p"
				>
					Something here to give the footer a purpose!
				</Typography>
				<Copyright />
			</footer>
			{/* End footer */}
		</React.Fragment>
	);
}
