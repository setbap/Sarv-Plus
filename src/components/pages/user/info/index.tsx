import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getInfo} from "../../../../actions/user_auth";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import {Orders} from "./Orders";
import {PersonalInfo} from "./PersonalInfo";
import {ChangePassword} from "./ChangePassword";


const Title = (props: any) => {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
}


const useStyles = makeStyles(theme => ({


    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },

    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },

}));

const Index = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(() => {
        dispatch(getInfo())
    }, []);


    return (
        <Container maxWidth={"lg"} className={classes.container}>
            <Typography component="h1" className={classes.paper} variant="h4" color="textPrimary" align={"center"}  gutterBottom>
                سوابق و اطلاعات شخصی
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <PersonalInfo/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <ChangePassword/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Orders/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Orders/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Orders/>
                    </Paper>
                </Grid>

            </Grid>


        </Container>
    )
};

export default Index