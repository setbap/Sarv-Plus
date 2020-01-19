import * as React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import SearchIcon from '@material-ui/icons/Search';
import {ChangeEvent, useState , useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from '@date-io/dayjs';
import {useHistory} from "react-router-dom";
import Map_wrapper from "./map_wrapper";
import Button from "@material-ui/core/Button";
import {FmapSearchResault, FsearchResault} from "../../../util/page_urls";
import Footer from "../../layouts/Footer";


const useStyle = makeStyles((theme) => ({
    headText: {
        margin: theme.spacing(2)
    },
    searchForm: {
        border: `2px solid ${theme.palette.secondary.main}`,
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
    const [isSelected , setIsSelected] = useState(false)
    const classes = useStyle();
    const history = useHistory();
    const [state, setState] = useState({
        distant: "",
        lat: "",
        lng: ""
    });

    useEffect(() => {
        if (!isSelected && state.lat && state.lng) {
            setIsSelected(true)
        }
    },[state])

    const mapAdderFunc = (e: any) => {
        setState((prevState) => ({
            lat: e.latlng.lat,
            lng: e.latlng.lng,
            distant: prevState.distant
        }))

    };

    const searchTour = () => {
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
            [e.target.name]: +e.target.value >0 ? +e.target.value : 0
        }))

    };


    return (
        <>
        <Container maxWidth={"md"}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Typography className={classes.headText} color={"secondary"} align={"center"} variant={"h4"}>
                    جست و جو با استفاده از نقشه
                </Typography>
                <Box fontWeight={600} fontSize={12} >
                                    *ایتدا برای جست و جو یک نقطه در نقشه انتخاب کنید.
                                </Box>
                                <Box fontWeight={600} fontSize={12} >
                                    *سپس شعاع را وارد کنید.
                                </Box>

                <Box className={classes.searchForm}>
                    <div>
                        <Map_wrapper adder={mapAdderFunc} markersData={state}/>
                        {!isSelected && <Box fontWeight={600} fontSize={12} color={"red"} >
                       * یک نقطه را انتخاب کنید.
    </Box> }
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
                                        label="متر"
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
                            disabled={ (isSelected && +state.distant) ? false:true}
                            className={classes.button}
                            startIcon={<SearchIcon className={classes.iconPadding}/>}
                        >
                            جست و جو
                        </Button>
                    </Box>
                </Box>
            </MuiPickersUtilsProvider>
        </Container>
        <Footer />
        </>
    )
};


export default Search