import * as React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import Input from "@material-ui/core/Input";
import SearchIcon from '@material-ui/icons/Search';
import {ChangeEvent, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from '@date-io/dayjs';
import {useHistory} from "react-router-dom";
import Map_wrapper from "./map_wrapper";

import {Divider} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {FmapSearchResault, FsearchResault} from "../../../util/page_urls";


const useStyle = makeStyles((theme) => ({
    headText: {
        margin: theme.spacing(2)
    },
    searchForm: {
        border: "2px solid gray",
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
    },
    button: {
        alignSelf: "center",
        margin: theme.spacing(2),
        paddingInline: theme.spacing(2),

    },
    searchItem: {
        marginBottom: `${theme.spacing(4)}px !important `,
        marginTop: `${theme.spacing(4)}px !important `
    },
    iconPadding: {
        marginLeft: theme.spacing(1)
    }

}));

const Search = (props: any) => {

    const classes = useStyle();
    const history = useHistory();
    const [state, setState] = useState({
        distant: "",
        lat: "",
        lng: ""
    });

    const mapAdderFunc = (e: any) => {
        console.log(e.latlng);
        setState((prevState) => ({
            lat: e.latlng.lat,
            lng: e.latlng.lng,
            distant: prevState.distant
        }))

    };

    const searchTour = () => {
        console.log(state);
        // const urlParam = new URLSearchParams();
        const urlParam = Object.keys(state).map((key) => {
            // @ts-ignore
            if (state[key]) return [key, state[key].toString()].map(encodeURIComponent).join("=");
        }).filter(data => data).join("&");
        history.push({
            pathname: FmapSearchResault,
            search: urlParam
        })
    }
    const radiusChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.persist();
        setState((val: any) => ({
            ...val,
            [e.target.name]: e.target.value
        }))

    };


    return (
        <Container maxWidth={"md"}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Typography className={classes.headText} align={"center"} variant={"h4"}>
                    جست و جو در میان تور ها
                </Typography>

                <Box className={classes.searchForm}>
                    <div>
                        <Map_wrapper adder={mapAdderFunc} markersData={state}/>

                    </div>

                    <Grid className={classes.searchItem} container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box alignItems="center" justifyContent={"center"} display={'flex'} flexDirection="row">
                                <Box margin={1}>
                                    <Typography>
                                        شعاع محدوده
                                    </Typography>
                                </Box>
                                <Box>
                                    <TextField
                                        name={"distant"}
                                        type={"number"}
                                        value={state.distant}
                                        onChange={radiusChangeHandler}
                                        label="از"
                                        variant={"outlined"}
                                    />

                                </Box>

                            </Box>

                        </Grid>
                    </Grid>


                    <Box component={"div"} display={"flex"} justifyContent={"flex-end"}>
                        <Button
                            onClick={searchTour}
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<SearchIcon className={classes.iconPadding}/>}
                        >
                            جست و جو
                        </Button>
                    </Box>
                </Box>
            </MuiPickersUtilsProvider>
        </Container>
    )
};


export default Search