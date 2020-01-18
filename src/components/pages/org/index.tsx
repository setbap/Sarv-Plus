import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {get_single_org, post_org_rate, post_org_comment} from "../../../actions/explore_orgs";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import {useParams, useHistory} from "react-router-dom";
import Box from "@material-ui/core/Box";
import GridList from '@material-ui/core/GridList';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import {Ftour} from "../../../util/page_urls";
import Rating from '@material-ui/lab/Rating';
import {useLoggend} from "../../../util/isLogged";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import theme from "../../../theme";


const Title = (props: any) => {
    return (
        <Typography align={"center"} component="h2" variant="h6" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
}


const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },

    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    textCenter: {
        textAlign: "center",
    },

    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'column',
    },
    textArea: {
        borderRadius: `${theme.spacing(1)}px !important`,
        marginTop: `${theme.spacing(1)}px`,
        marginBottom: `${theme.spacing(2)}px`,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "auto",
        // height: 450,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    gridTile: {
        padding: theme.spacing(2)
    },

}));

const Index = () => {
    const [rate, setRate] = React.useState<number | null>(3);
    const [text, setText] = React.useState<string>("");
    const logged = useLoggend();
    const {id} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(() => {
        dispatch(get_single_org(id as string))
    }, [id]);

    const {org, loading} = useSelector(((state: any) => state.orgs));
    const handleClick = () => {
        dispatch(post_org_rate(rate, id as string))
    };
    const handleClickComment = () => {
        dispatch(post_org_comment(text, id as string))
    };

    return (
        <Container maxWidth={"lg"} className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper variant={"outlined"} className={classes.paper}>
                        <img alt={"عکس تور"} src={org?.image}
                             style={{objectFit: "cover", height: 300, cursor: "pointer"}}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Title>سازمان {org?.name} </Title>
                        <Grid style={{marginTop: "16px"}} container spacing={6}>
                            <Grid item xs={6}>
                                <Box display={"flex"} justifyContent={"center"}>
                                    <Typography color={"textPrimary"} variant={"h6"} align={"center"}>
                                        تعداد تور ها:
                                    </Typography>
                                    <Typography color={"primary"} variant={"h6"} align={"center"}>
                                        {org?.tourCount}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box display={"flex"} justifyContent={"center"}>
                                    {/*<Typography color={"textPrimary"} variant={"h6"} align={"center"}>*/}
                                    {/*    میانگین امتیاز هاا:*/}
                                    {/*</Typography>*/}
                                    {/*<Typography color={"primary"} variant={"h6"} align={"center"}>*/}
                                    {/*    {org?.rateAvg}*/}
                                    {/*</Typography>*/}
                                    <Rating name="read-only" value={org?.rateAvg} readOnly/>

                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box display={"flex"} justifyContent={"center"}>
                                    <Typography color={"textPrimary"} variant={"h6"} align={"center"}>
                                        تعداد نظرات:
                                    </Typography>
                                    <Typography color={"primary"} variant={"h6"} align={"center"}>
                                        {org?.commnetCount}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box display={"flex"} justifyContent={"center"}>
                                    <Typography color={"textPrimary"} variant={"h6"} align={"center"}>
                                        تعداد رای:
                                    </Typography>
                                    <Typography color={"primary"} variant={"h6"} align={"center"}>
                                        {org?.rateCount}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <GridList cellHeight={200} className={classes.gridList}>
                            <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                                <ListSubheader component="div"> <Title> تور های اخیر </Title></ListSubheader>
                            </GridListTile>
                            {(org?.tours || []).map((tour: any) => (
                                <GridListTile key={tour.id}>
                                    <img src={tour.image} alt={tour.name}/>
                                    <GridListTileBar
                                        className={classes.gridTile}
                                        title={tour.name}
                                        subtitle={<span>از : {tour.sourcePlace}
                                            <br/> به : {tour.destinationPlace}  </span>}
                                        actionIcon={
                                            <IconButton onClick={e => history.push(Ftour + "/" + tour.id)}
                                                        aria-label={`اطلاعات بیشتز  ${tour.name}`}
                                                        className={classes.icon}>
                                                <InfoIcon/>
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Title>درباره ما :</Title>
                            </Grid>
                            <Grid item xs>
                                <Typography>{org?.description}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Title>تور لیدر ها: </Title>
                        <Grid container justify={"center"} spacing={0}>
                            {
                                (org?.leaders || []).map((leader: any) => {

                                    return (
                                        <Grid key={leader.id} item xs={2} md={1}>
                                            <Tooltip title={`${leader.name} ${leader.lastname}`}>
                                                <Avatar alt={leader.name} className={classes.large}
                                                        src={leader.image}>ُs</Avatar>
                                            </Tooltip>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Paper>
                </Grid>
                {
                    logged && (<Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Title> میزان علاقه مندی به سازمان: </Title>
                            <Grid container justify={"center"}>

                                <Grid className={classes.textCenter} item xs={12} md={4} xl={2}>
                                    <Rating name={"rate"} value={rate} onChange={((event, value) => setRate(value))}/>
                                </Grid>
                                <Grid className={classes.textCenter} item xs={6} md={2}>
                                    <Button variant="contained" color="primary" onClick={handleClick}>
                                        ثبت امتیاز
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>)
                }

                {logged && (<Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Title>ثبت نظر</Title>
                        <TextareaAutosize
                            className={classes.textArea}
                            aria-label="maximum height"
                            rowsMin={8}
                            placeholder=" نظر خود را وارد کنید."
                            value={text}
                            onChange={(e) => setText(e.target.value)}

                        />
                        <Button variant="contained" color="primary" onClick={handleClickComment}>
                            ثبت نظر
                        </Button>
                    </Paper>
                </Grid>)}

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Title> نظرات </Title>
                    </Paper>
                    {
                        (org?.comments || []).map((comment: any) => {
                                return (<Paper variant={"outlined"} className={classes.paper}
                                               style={{marginBottom: '8px', marginTop: "8px"}}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={2}>

                                            <Typography>{comment.nameOfUser} میگه: </Typography>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography>{comment.body} </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>)
                            }
                        )
                    }
                </Grid>
            </Grid>
        </Container>
    )
};

export default Index