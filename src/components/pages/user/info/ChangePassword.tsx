import React, {ChangeEvent, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Title from './Title';
import Grid from "@material-ui/core/Grid";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {setNewPass, iWantToBeTourLeader} from "../../../../actions/user_auth";


const useStyles = makeStyles(theme => ({
    mp: {
        marginTop: theme.spacing(2),
    },
}));

export const ChangePassword = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {user} = useSelector(((state: any) => state.auth));
    const [state, setState] = useState({
        newPassword: "",
        oldPassword: ""
    });

    useEffect(() => {
        setState(() => user)
    }, [user]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.persist();
        setState((val: any) => ({
            ...val,
            [e.target.name]: e.target.value
        }))
    };

    const formSubmit = (event: any) => {
        event.preventDefault();
        dispatch(setNewPass(state));
        console.log(state);
    }

    const okayTourLeader = (event: any) => {
        dispatch(iWantToBeTourLeader());
    }


    return (
        <React.Fragment>
            <Title>تغییر گذزواژه </Title>
            <form onSubmit={formSubmit}>
                <Grid spacing={2} container>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            type={"password"}
                            margin="normal"
                            label={"گذروازه حاضر"} value={state.oldPassword || ''} className={classes.mp}
                            onChange={changeHandler}
                            variant={"outlined"} required name={"oldPassword"}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            type={"password"}
                            required
                            label={"گذروازه جدید"} value={state.newPassword || ''} className={classes.mp}
                            onChange={changeHandler}
                            variant={"outlined"} name={"newPassword"}/>
                    </Grid>


                    <Grid item xs={12}>
                        <Button type={"submit"} variant={"outlined"} color="primary" style={{
                            float: "left"
                        }}>تغییر گذرواژه</Button>
                    </Grid>

                    <Button type={"submit"} variant={"outlined"} color="primary" onClick={okayTourLeader} style={{
                        float: "left"
                    }}>تغadssdasdasdasه</Button>
                </Grid>
            </form>
        </React.Fragment>
    );
}