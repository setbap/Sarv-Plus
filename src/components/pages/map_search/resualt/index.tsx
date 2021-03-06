import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { map_search_in_tours } from "../../../../actions/explore_tours";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Pagination from "material-ui-flat-pagination/lib/Pagination";
import Footer from "../../../layouts/Footer";
import { makeStyles } from "@material-ui/core";
import Map from "./show_tours_map";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

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

const SearchResault = () => {
	const query = useQuery();
	const classes = useStyles();
	const dispatch = useDispatch();
	const { tours, loading } = useSelector((state: any) => {
		if (state.tours) {
			return state.tours;
		}
		return { tours: [], loading: false };
	});
	const history = useHistory();
	const pageQueryHandler = (pn: number) => {
		query.set("page", pn + "");
		history.push({
			pathname: history.location.pathname,
			search: "?" + query.toString(),
		});
	};
	useEffect(() => {
		const data: any = {};
		query.forEach((a, b) => {
			data[b] = a;
		});
		console.log("data", data);
		dispatch(map_search_in_tours(data));
		// eslint-disable-next-line
	}, [query.toString()]);

	// @ts-ignore
	// @ts-ignore
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
					<h1>
						{query ? (
							<>
								<Map
									radius={
										(query && query.get("distant")) || 1
									}
									lng={(query && query.get("lng")) || 1}
									lat={(query && query.get("lat")) || 1}
									markersData={(
										(!loading && tours && tours.tours) ||
										[]
									).map((items: any) => {
										return {
											lng:
												items.sourceGeo?.coordinates[0],
											lat:
												items.sourceGeo?.coordinates[1],
											title: items.name,
										};
									})}
								/>
							</>
						) : (
							<></>
						)}
					</h1>
				</Container>
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
						{tours && tours.tours ? (
							<Pagination
								limit={12}
								offset={(tours.pageNumber - 1) * 12}
								total={tours.allItems || 0}
								onClick={(e, offset) =>
									// history.push(`${Ftours}/${offset / 12 + 1}`
									pageQueryHandler(offset / 12 + 1)
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
};

export default SearchResault;
