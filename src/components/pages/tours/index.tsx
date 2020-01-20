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
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Pagination from "material-ui-flat-pagination";
import { get_lastest_tours_with_page } from "../../../actions/explore_tours";
import { useHistory } from "react-router-dom";
import Footer from "../../layouts/Footer";
import { headerName } from "../../../actions/user_auth";
import { Ftours } from "../../../util/page_urls";

const useStyles = makeStyles((theme) => ({
	fullpage: {
		minHeight: "100vh",
	},
	itemSpace: {
		marginTop: theme.spacing(2),
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
}));

export default function Tours() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const { page } = useParams();

	useEffect(() => {
		if (page && +page) {
			dispatch(get_lastest_tours_with_page(+page));
		} else {
			dispatch(get_lastest_tours_with_page(1));
		}
	}, [page, dispatch]);

	useEffect(() => {
		dispatch(headerName("اخرین تور ها"));
	}, [dispatch]);

	const { tours, loading } = useSelector((state: any) => {
		if (state.tours) {
			return state.tours;
		}
		return { tours: [], loading: false };
	}, shallowEqual);

	return (
		<React.Fragment>
			<main className={classes.fullpage}>
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
							{console.log(tours)}
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
						{console.log("loading", loading)}
						{loading ? (
							<Box
								display="flex"
								width="100%"
								justifyContent="center"
							>
								<CircularProgress disableShrink />
								<CircularProgress disableShrink />
								<CircularProgress disableShrink />
								<CircularProgress disableShrink />
							</Box>
						) : (
							((tours && tours.tours) || []).map((card: any) => (
								<Grid item key={card.id} xs={12} sm={6} md={4}>
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
											<Typography component="div">
												<Box>
													{" "}
													از{card.sourcePlace}{" "}
												</Box>
												<Box>
													{" "}
													به {
														card.destinationPlace
													}{" "}
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
													history.push(
														`/tour/${card.id}`,
													)
												}
											>
												مشاهده
											</Button>
											<Button
												size="small"
												color="primary"
											>
												عضویت
											</Button>
										</CardActions>
									</Card>
								</Grid>
							))
						)}
						{tours && tours.tours && tours.tours.length === 0 ? (
							<Typography variant="h3" component="div">
								<Box textAlign="center">
									{" "}
									تور هامون تموم شده :)))
								</Box>
							</Typography>
						) : (
							""
						)}
					</Grid>
					<Box alignSelf="center" textAlign="center" m={3}>
						{tours ? (
							<Pagination
								limit={12}
								offset={(tours.pageNumber - 1) * 12}
								total={tours.allItems || 0}
								onClick={(e, offset) =>
									history.push(`${Ftours}/${offset / 12 + 1}`)
								}
							/>
						) : (
							""
						)}
					</Box>
				</Container>
			</main>
			{/* Footer */}
			<Footer />
			{/* End footer */}
		</React.Fragment>
	);
}
